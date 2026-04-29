const https = require('https');
const http = require('http');
const { URL } = require('url');
const fs = require('fs');

class WebsiteCrawler {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.visitedUrls = new Set();
        this.siteMap = {};
        this.navigationStructure = {};
    }

    async fetchPage(url) {
        return new Promise((resolve, reject) => {
            const urlObj = new URL(url);
            const client = urlObj.protocol === 'https:' ? https : http;
            
            const options = {
                hostname: urlObj.hostname,
                port: urlObj.port,
                path: urlObj.pathname + urlObj.search,
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            };

            const req = client.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve({ statusCode: res.statusCode, data });
                });
            });

            req.on('error', (err) => {
                reject(err);
            });

            req.setTimeout(10000, () => {
                req.destroy();
                reject(new Error('Request timeout'));
            });

            req.end();
        });
    }

    extractLinks(html, baseUrl) {
        const links = [];
        const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]*)<\/a>/gi;
        let match;

        while ((match = linkRegex.exec(html)) !== null) {
            const href = match[1];
            const text = match[2].trim();
            
            try {
                const fullUrl = new URL(href, baseUrl);
                if (fullUrl.hostname === new URL(baseUrl).hostname) {
                    links.push({
                        url: fullUrl.href,
                        text: text,
                        href: href
                    });
                }
            } catch (e) {
                // Invalid URL, skip
            }
        }

        return links;
    }

    extractPageInfo(html, url) {
        const info = {
            title: '',
            metaDescription: '',
            h1: [],
            navigationLinks: [],
            mainSections: []
        };

        // Extract title
        const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
        if (titleMatch) {
            info.title = titleMatch[1].trim();
        }

        // Extract meta description
        const metaMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i);
        if (metaMatch) {
            info.metaDescription = metaMatch[1].trim();
        }

        // Extract H1 tags
        const h1Regex = /<h1[^>]*>([^<]*)<\/h1>/gi;
        let h1Match;
        while ((h1Match = h1Regex.exec(html)) !== null) {
            info.h1.push(h1Match[1].trim());
        }

        // Extract navigation links
        info.navigationLinks = this.extractLinks(html, url);

        return info;
    }

    async crawlPage(url) {
        if (this.visitedUrls.has(url)) {
            return [];
        }

        console.log(`Crawling: ${url}`);
        this.visitedUrls.add(url);

        try {
            const response = await this.fetchPage(url);
            
            if (response.statusCode !== 200) {
                console.log(`HTTP ${response.statusCode} for ${url}`);
                return [];
            }

            const pageInfo = this.extractPageInfo(response.data, url);
            this.siteMap[url] = pageInfo;

            // Return new URLs to crawl
            const newUrls = [];
            for (const link of pageInfo.navigationLinks) {
                const cleanUrl = link.url.split('#')[0]; // Remove fragments
                if (!this.visitedUrls.has(cleanUrl) && 
                    !cleanUrl.match(/\.(pdf|jpg|jpeg|png|gif|mp4|mp3|zip)$/i)) {
                    newUrls.push(cleanUrl);
                }
            }

            return newUrls;

        } catch (error) {
            console.log(`Error crawling ${url}: ${error.message}`);
            return [];
        }
    }

    async crawlWebsite(maxPages = 30) {
        const urlsToVisit = [this.baseUrl];
        let pagesCrawled = 0;

        while (urlsToVisit.length > 0 && pagesCrawled < maxPages) {
            const currentUrl = urlsToVisit.shift();
            const newUrls = await this.crawlPage(currentUrl);
            
            // Add new URLs to queue
            for (const url of newUrls) {
                if (!urlsToVisit.includes(url) && !this.visitedUrls.has(url)) {
                    urlsToVisit.push(url);
                }
            }
            
            pagesCrawled++;
            
            // Be respectful to the server
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log(`Crawled ${pagesCrawled} pages`);
    }

    analyzeNavigationStructure() {
        const structure = {
            mainNavigation: [],
            pageHierarchy: {},
            urlPatterns: {},
            commonSections: []
        };

        // Analyze URL patterns
        for (const url of Object.keys(this.siteMap)) {
            const urlObj = new URL(url);
            const pathParts = urlObj.pathname.split('/').filter(p => p);
            
            let category;
            if (pathParts.length === 0) {
                category = 'homepage';
            } else if (pathParts.length === 1) {
                category = 'main_pages';
            } else {
                category = `level_${pathParts.length}`;
            }
            
            if (!structure.urlPatterns[category]) {
                structure.urlPatterns[category] = [];
            }
            
            structure.urlPatterns[category].push({
                url: url,
                path: urlObj.pathname,
                title: this.siteMap[url].title
            });
        }

        // Extract common navigation items
        const navCounts = {};
        const totalPages = Object.keys(this.siteMap).length;
        
        for (const pageInfo of Object.values(this.siteMap)) {
            for (const navLink of pageInfo.navigationLinks) {
                const text = navLink.text;
                if (text && text.length > 0) {
                    navCounts[text] = (navCounts[text] || 0) + 1;
                }
            }
        }

        // Main navigation items (appear on most pages)
        for (const [navText, count] of Object.entries(navCounts)) {
            if (count >= totalPages * 0.3) { // Appears on at least 30% of pages
                structure.mainNavigation.push({
                    text: navText,
                    frequency: count,
                    percentage: (count / totalPages) * 100
                });
            }
        }

        // Sort by frequency
        structure.mainNavigation.sort((a, b) => b.frequency - a.frequency);

        return structure;
    }

    generateAstroNavigation() {
        const structure = this.analyzeNavigationStructure();
        const navItems = [];

        // Common navigation mapping
        const navMapping = {
            'Home': '/',
            'Startseite': '/',
            'Über uns': '/about',
            'About': '/about',
            'Angebote': '/angebote',
            'Services': '/angebote',
            'Schule': '/schule',
            'School': '/schule',
            'Assessment': '/assessment',
            'Blaulicht': '/blaulicht',
            'Kontakt': '/kontakt',
            'Contact': '/kontakt',
            'Impressum': '/kontakt/impressum',
            'Datenschutz': '/kontakt/datenschutz',
            'AGB': '/kontakt/agb'
        };

        // Create navigation based on found items and mapping
        for (const navItem of structure.mainNavigation.slice(0, 8)) {
            const text = navItem.text;
            let path = navMapping[text];
            
            if (!path) {
                // Try to find URL from site map
                for (const [url, pageInfo] of Object.entries(this.siteMap)) {
                    if (pageInfo.title.toLowerCase().includes(text.toLowerCase())) {
                        const urlObj = new URL(url);
                        path = urlObj.pathname;
                        break;
                    }
                }
            }
            
            if (path) {
                navItems.push({
                    text: text,
                    path: path,
                    frequency: navItem.frequency
                });
            }
        }

        return navItems;
    }

    saveResults(outputFile = 'website_architecture.json') {
        const results = {
            baseUrl: this.baseUrl,
            crawlTimestamp: new Date().toISOString(),
            totalPages: Object.keys(this.siteMap).length,
            siteMap: this.siteMap,
            navigationStructure: this.analyzeNavigationStructure(),
            suggestedNavigation: this.generateAstroNavigation()
        };

        fs.writeFileSync(outputFile, JSON.stringify(results, null, 2), 'utf8');
        console.log(`Results saved to ${outputFile}`);
        return results;
    }
}

async function main() {
    const baseUrl = "https://komm-raus.org";
    
    console.log(`Starting crawl of ${baseUrl}`);
    const crawler = new WebsiteCrawler(baseUrl);
    
    try {
        await crawler.crawlWebsite(30);
        const results = crawler.saveResults();
        
        console.log('\n=== CRAWL SUMMARY ===');
        console.log(`Total pages crawled: ${results.totalPages}`);
        console.log(`Main navigation items found: ${results.suggestedNavigation.length}`);
        
        console.log('\n=== SUGGESTED NAVIGATION ===');
        for (const item of results.suggestedNavigation) {
            console.log(`- ${item.text}: ${item.path} (frequency: ${item.frequency})`);
        }
        
        console.log('\nDetailed results saved to website_architecture.json');
        
    } catch (error) {
        console.error(`Crawling failed: ${error.message}`);
    }
}

if (require.main === module) {
    main();
}