# komm-raus.org

A modern recreation of the komm-raus.org website—transforming a legacy static HTML/CSS site into a performant, accessible, and maintainable Astro-based application.

## 🎯 Project Overview

**komm-raus.org** is a complete modernization of the original website, addressing critical issues including:
- **Code Duplication**: Component architecture eliminates repeated code
- **Inconsistent Styling**: Unified design system via Tailwind CSS
- **Poor Performance**: Optimized builds, lazy-loading, and image compression
- **Limited Accessibility**: WCAG2AA compliance with Pa11y integration
- **Scalability Issues**: Modular, maintainable codebase

The project leverages modern web technologies to create a fast, accessible, and enjoyable user experience while maintaining the original site's content and visual identity.

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Astro** | Modern meta-framework for fast, content-rich sites |
| **TypeScript** | Type-safe development with better IDE support |
| **Tailwind CSS** | Utility-first CSS framework for rapid UI development |
| **React + Lucide Icons** | Interactive components and icon library |
| **Sharp** | High-performance image optimization (WebP/AVIF) |
| **Framer Motion** | Advanced animations and motion design |
| **AOS** | Animate On Scroll library for scroll-triggered effects |
| **Pa11y** | Automated accessibility testing (WCAG2AA) |

## 📁 Project Structure

```
komm-raus.org/
├── web/                        # Main Astro project
│   ├── public/                 # Static assets
│   │   ├── favicon.svg
│   │   ├── assets/             # Original assets (CSS, fonts, etc.)
│   │   └── images/             # Optimized images
│   │
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Hero.astro
│   │   │   ├── Card.astro
│   │   │   ├── Button.astro
│   │   │   ├── Section.astro
│   │   │   └── Navigation.astro
│   │   │
│   │   ├── layouts/            # Page layouts
│   │   │   └── MainLayout.astro
│   │   │
│   │   ├── pages/              # Astro pages (auto-routed)
│   │   │   ├── index.astro
│   │   │   └── [other pages]
│   │   │
│   │   ├── lib/                # Utilities & configuration
│   │   │   └── siteConfig.ts
│   │   │
│   │   ├── scripts/            # Client-side JavaScript
│   │   └── styles/             # Global CSS
│   │
│   ├── scripts/                # Build scripts
│   │   ├── optimize-images.cjs # Sharp-based image optimization
│   │   ├── copy-videos.cjs     # Video processing
│   │   ├── copy-audio.cjs      # Audio processing
│   │   └── a11y-run-all.mjs    # Accessibility checks
│   │
│   ├── astro.config.mjs        # Astro configuration
│   ├── tailwind.config.cjs     # Tailwind CSS config
│   ├── tsconfig.json           # TypeScript configuration
│   ├── .pa11yrc.json           # Pa11y accessibility config
│   ├── package.json
│   ├── package-lock.json
│   ├── ACCESSIBILITY.md        # Accessibility guidelines
│   ├── ACCESSIBILITY-REPORT.md # Latest audit reports
│   ├── README-images.md        # Image optimization notes
│   └── README.md               # Project README (web/)
│
├── komm-raus.org/              # Static site assets
├── .vscode/                    # VS Code workspace settings
├── .gitignore
├── package.json                # Root package (dependencies)
├── package-lock.json
├── start_server.bat            # Windows server startup script
└── README.md                   # This file

```

## ✨ Features

### ✅ Implemented
- **Component Architecture**: Hero, Card, Section, Button, Navigation components
- **Layout System**: Unified MainLayout with Header, Footer, and SEO meta tags
- **Styling**: Tailwind CSS with custom brand colors and responsive design
- **Image Optimization**: Automated Sharp pipeline for WebP/AVIF conversion
- **Accessibility**: Pa11y integration with WCAG2AA compliance checks
- **Animations**: AOS scroll effects + Framer Motion advanced animations
- **SEO**: OpenGraph tags, structured data (Schema.org), sitemap, robots.txt
- **Performance**: Fast build times, lazy loading, optimized assets
- **Mobile-First Design**: Responsive layouts with touch-friendly interactions

### 🚀 In Progress
- Full page migrations (Home, About, ADHS, Assessment, Blaulicht, Schule)
- Enhanced font loading strategy
- Complete component library

### 📝 Roadmap
- **Phase 2**: Complete page migrations and dynamic content loading
- **Phase 3**: Media optimization (videos, audio, lazy loading)
- **Phase 4**: Advanced animations and UX enhancements
- **Phase 5**: SEO optimization and performance monitoring
- **Phase 6**: Internationalization (i18n) support
- **Phase 7**: Contact forms and backend integration

## 🚀 Getting Started

### Prerequisites
- **Node.js** v16+ 
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/onkarbhattacharya-koventures/komm-raus.org.git
cd komm-raus.org

# Navigate to the web directory
cd web

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
# Open http://localhost:4321 in your browser
```

The dev server includes:
- Hot module replacement (HMR) for instant updates
- File watching and auto-refresh
- Dev toolbar with debugging information

### Building for Production

```bash
# Optimize all assets
npm run assets:optimize

# Build production bundle
npm run build

# Preview build locally
npm run preview
```

## 📋 Available Commands

All commands are run from the `web/` directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server @ `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run images:optimize` | Optimize images using Sharp |
| `npm run videos:copy` | Copy and process videos |
| `npm run audio:copy` | Copy and process audio files |
| `npm run assets:optimize` | Optimize all assets (images, videos, audio) |
| `npm run a11y` | Run accessibility checks (WCAG2AA) |
| `npm run a11y:local` | Check local server accessibility |
| `npm run ci` | CI pipeline (optimize, build, check) |
| `npm run astro ...` | Run Astro CLI commands |

## ♿ Accessibility

We are committed to WCAG2AA accessibility standards:

```bash
# Start dev server first
npm run dev

# In another terminal, run accessibility checks
npm run a11y:local

# View detailed report
cat ACCESSIBILITY-REPORT.md
```

**Accessibility Guidelines**: See [`ACCESSIBILITY.md`](./web/ACCESSIBILITY.md)

**Recent Audit**: See [`ACCESSIBILITY-REPORT.md`](./web/ACCESSIBILITY-REPORT.md)

## 🎨 Styling & Customization

### Tailwind CSS
The project uses Tailwind CSS with custom configuration:
- **Colors**: Brand colors in `tailwind.config.cjs`
- **Fonts**: Inter (body), Playfair Display (headings)
- **Spacing**: Custom scales for consistency
- **Dark Mode**: Support included

### Component Customization
Components are located in `src/components/` and use Astro slots for flexibility:

```astro
<Hero 
  title="Welcome" 
  subtitle="Modern Recreation"
  ctaText="Get Started"
/>
```

## 📸 Image Optimization

The project includes automated image optimization:

```bash
npm run images:optimize
```

This script:
- Converts to WebP/AVIF for modern browsers
- Generates responsive variants (multiple sizes)
- Compresses losslessly for performance
- Organizes output in `public/images/`

See [`README-images.md`](./web/README-images.md) for detailed configuration.

## 🔍 Performance & SEO

### Performance Optimization
- Lazy loading for images and components
- Automatic code splitting
- Asset minification
- CDN-ready builds

### SEO Features
- Semantic HTML structure
- OpenGraph meta tags
- JSON-LD structured data
- Dynamic sitemap generation
- robots.txt configuration

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Follow the Roadmap**: Check the [roadmap section](#-roadmap) for planned work
2. **Accessibility First**: All changes must pass Pa11y checks
   ```bash
   npm run a11y
   ```
3. **Optimize Assets**: Always run optimization before committing
   ```bash
   npm run assets:optimize
   ```
4. **Test Thoroughly**:
   - Test on multiple browsers (Chrome, Firefox, Safari)
   - Test on mobile devices (iOS, Android)
   - Verify accessibility with assistive technologies
5. **Code Quality**:
   - Use TypeScript for type safety
   - Follow existing component patterns
   - Write descriptive commit messages

### Contribution Workflow

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature

# 2. Make your changes and test
npm run dev

# 3. Run checks
npm run assets:optimize
npm run a11y

# 4. Commit and push
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature

# 5. Open a Pull Request
```

## 📚 Learn More

- **[Astro Documentation](https://docs.astro.build)** - Framework docs
- **[Tailwind CSS](https://tailwindcss.com)** - Styling guide
- **[React Integration](https://docs.astro.build/en/guides/integrations-guide/react/)** - For interactive components
- **[Sharp Image Processing](https://sharp.pixelplumbing.com/)** - Image optimization library
- **[AOS Animation Library](https://michalsnik.github.io/aos/)** - Scroll animations
- **[Framer Motion](https://www.framer.com/motion/)** - Advanced animations
- **[Pa11y Accessibility](https://pa11y.org/)** - Accessibility testing
- **[WCAG 2.1 Standards](https://www.w3.org/WAI/WCAG21/quickref/)** - Accessibility guidelines

## 📞 Support & Questions

For issues, questions, or suggestions:
- **GitHub Issues**: [Report bugs](https://github.com/onkarbhattacharya-koventures/komm-raus.org/issues)
- **Discussions**: [Ask questions](https://github.com/onkarbhattacharya-koventures/komm-raus.org/discussions)

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use it for your own purposes.

## 🙏 Acknowledgments

- Original komm-raus.org website for inspiration and content
- Astro team for an amazing meta-framework
- Tailwind CSS for utility-first CSS design
- Open source community for invaluable tools and libraries

---

**Last Updated**: 2026-04-20 12:33:35  
**Repository**: [onkarbhattacharya-koventures/komm-raus.org](https://github.com/onkarbhattacharya-koventures/komm-raus.org)