#!/usr/bin/env python3
"""
Website Crawler for komm-raus.org
Crawls the website and creates an architecture mapping
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
import time
from collections import defaultdict
import re

class WebsiteCrawler:
    def __init__(self, base_url):
        self.base_url = base_url
        self.visited_urls = set()
        self.site_map = {}
        self.navigation_structure = defaultdict(list)
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })

    def is_valid_url(self, url):
        """Check if URL belongs to the target domain"""
        parsed = urlparse(url)
        return parsed.netloc == urlparse(self.base_url).netloc

    def clean_url(self, url):
        """Remove fragments and normalize URL"""
        parsed = urlparse(url)
        return f"{parsed.scheme}://{parsed.netloc}{parsed.path}"

    def extract_navigation_info(self, soup, url):
        """Extract navigation structure from page"""
        nav_info = {
            'title': '',
            'meta_description': '',
            'h1': [],
            'navigation_links': [],
            'breadcrumbs': [],
            'main_sections': []
        }

        # Title
        title_tag = soup.find('title')
        if title_tag:
            nav_info['title'] = title_tag.get_text().strip()

        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            nav_info['meta_description'] = meta_desc.get('content', '').strip()

        # H1 tags
        h1_tags = soup.find_all('h1')
        nav_info['h1'] = [h1.get_text().strip() for h1 in h1_tags]

        # Navigation links
        nav_elements = soup.find_all(['nav', 'ul', 'ol'])
        for nav in nav_elements:
            links = nav.find_all('a', href=True)
            for link in links:
                href = link.get('href')
                text = link.get_text().strip()
                if href and text:
                    full_url = urljoin(url, href)
                    if self.is_valid_url(full_url):
                        nav_info['navigation_links'].append({
                            'text': text,
                            'url': self.clean_url(full_url),
                            'relative_url': href
                        })

        # Main content sections
        main_sections = soup.find_all(['section', 'article', 'main'])
        for section in main_sections:
            section_info = {}
            # Get section heading
            heading = section.find(['h1', 'h2', 'h3'])
            if heading:
                section_info['heading'] = heading.get_text().strip()
            
            # Get section class/id for identification
            if section.get('class'):
                section_info['class'] = ' '.join(section.get('class'))
            if section.get('id'):
                section_info['id'] = section.get('id')
            
            if section_info:
                nav_info['main_sections'].append(section_info)

        return nav_info

    def crawl_page(self, url):
        """Crawl a single page and extract information"""
        if url in self.visited_urls:
            return []

        print(f"Crawling: {url}")
        self.visited_urls.add(url)

        try:
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Extract navigation info
            nav_info = self.extract_navigation_info(soup, url)
            self.site_map[url] = nav_info

            # Find all links on this page
            new_urls = []
            links = soup.find_all('a', href=True)
            
            for link in links:
                href = link.get('href')
                full_url = urljoin(url, href)
                clean_full_url = self.clean_url(full_url)
                
                if (self.is_valid_url(clean_full_url) and 
                    clean_full_url not in self.visited_urls and
                    not any(ext in clean_full_url.lower() for ext in ['.pdf', '.jpg', '.png', '.gif', '.mp4', '.mp3'])):
                    new_urls.append(clean_full_url)

            return new_urls

        except Exception as e:
            print(f"Error crawling {url}: {e}")
            return []

    def crawl_website(self, max_pages=50):
        """Crawl the entire website"""
        urls_to_visit = [self.base_url]
        pages_crawled = 0

        while urls_to_visit and pages_crawled < max_pages:
            current_url = urls_to_visit.pop(0)
            new_urls = self.crawl_page(current_url)
            
            # Add new URLs to the queue
            for url in new_urls:
                if url not in urls_to_visit and url not in self.visited_urls:
                    urls_to_visit.append(url)
            
            pages_crawled += 1
            time.sleep(1)  # Be respectful to the server

        print(f"Crawled {pages_crawled} pages")

    def analyze_navigation_structure(self):
        """Analyze the navigation structure"""
        structure = {
            'main_navigation': [],
            'page_hierarchy': {},
            'common_sections': [],
            'url_patterns': {}
        }

        # Analyze URL patterns
        for url in self.site_map.keys():
            path = urlparse(url).path
            parts = [p for p in path.split('/') if p]
            
            if len(parts) == 0:
                category = 'homepage'
            elif len(parts) == 1:
                category = 'main_pages'
            else:
                category = f"level_{len(parts)}"
            
            if category not in structure['url_patterns']:
                structure['url_patterns'][category] = []
            structure['url_patterns'][category].append({
                'url': url,
                'path': path,
                'title': self.site_map[url]['title']
            })

        # Extract common navigation items
        nav_counts = defaultdict(int)
        for page_info in self.site_map.values():
            for nav_link in page_info['navigation_links']:
                nav_counts[nav_link['text']] += 1

        # Main navigation items (appear on most pages)
        total_pages = len(self.site_map)
        for nav_text, count in nav_counts.items():
            if count >= total_pages * 0.5:  # Appears on at least 50% of pages
                structure['main_navigation'].append({
                    'text': nav_text,
                    'frequency': count,
                    'percentage': (count / total_pages) * 100
                })

        return structure

    def generate_astro_navigation(self):
        """Generate Astro navigation component based on crawled data"""
        structure = self.analyze_navigation_structure()
        
        # Create navigation items based on URL patterns
        nav_items = []
        
        # Sort main pages by common navigation frequency
        main_nav = sorted(structure['main_navigation'], 
                         key=lambda x: x['frequency'], reverse=True)
        
        # Map common navigation items to URLs
        for nav_item in main_nav[:8]:  # Limit to 8 main items
            nav_text = nav_item['text']
            
            # Find corresponding URL
            for url, page_info in self.site_map.items():
                if (page_info['title'].lower().find(nav_text.lower()) != -1 or
                    any(link['text'] == nav_text for link in page_info['navigation_links'])):
                    
                    path = urlparse(url).path
                    if path == '/':
                        path = '/'
                    elif not path.endswith('/'):
                        path += '/'
                    
                    nav_items.append({
                        'text': nav_text,
                        'path': path,
                        'url': url
                    })
                    break

        return nav_items

    def save_results(self, output_file='website_architecture.json'):
        """Save crawling results to JSON file"""
        results = {
            'base_url': self.base_url,
            'crawl_timestamp': time.strftime('%Y-%m-%d %H:%M:%S'),
            'total_pages': len(self.site_map),
            'site_map': self.site_map,
            'navigation_structure': self.analyze_navigation_structure(),
            'suggested_navigation': self.generate_astro_navigation()
        }

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
        
        print(f"Results saved to {output_file}")
        return results

def main():
    """Main function to run the crawler"""
    base_url = "https://komm-raus.org"
    
    print(f"Starting crawl of {base_url}")
    crawler = WebsiteCrawler(base_url)
    
    try:
        crawler.crawl_website(max_pages=30)
        results = crawler.save_results()
        
        print("\n=== CRAWL SUMMARY ===")
        print(f"Total pages crawled: {results['total_pages']}")
        print(f"Main navigation items found: {len(results['suggested_navigation'])}")
        
        print("\n=== SUGGESTED NAVIGATION ===")
        for item in results['suggested_navigation']:
            print(f"- {item['text']}: {item['path']}")
        
        print(f"\nDetailed results saved to website_architecture.json")
        
    except Exception as e:
        print(f"Crawling failed: {e}")

if __name__ == "__main__":
    main()