# komm-raus.org Recreation

This project is a modern recreation of the komm-raus.org website, transforming a legacy static HTML/CSS site into a performant, accessible, and maintainable Astro-based application. The original site is for Laubfrosch Waldseilgarten, offering outdoor adventure programs.

## Overview

The recreation addresses issues in the original site, such as code duplication, inconsistent styling, poor performance, and limited accessibility. It uses modern web technologies to create a scalable, SEO-friendly, and user-friendly experience.

## Tech Stack

- **Framework**: Astro (for content-heavy sites with fast builds)
- **Language**: TypeScript (for type safety)
- **Styling**: Tailwind CSS (utility-first design system)
- **Icons**: Lucide React
- **Animations**: AOS (Animate On Scroll)
- **Image Optimization**: Sharp (for WebP/AVIF conversion and responsive images)
- **Accessibility**: Pa11y (automated WCAG2AA checks)
- **Deployment**: Ready for Vercel/Netlify with global CDN

## Features

### Implemented
- **Component Architecture**: Reusable components (Hero, Card, Section, Button) for consistent UI
- **Layout System**: MainLayout.astro with unified Header/Footer and SEO meta tags
- **Styling**: Tailwind config with custom brand colors, fonts (Inter, Playfair Display), and responsive breakpoints
- **Image Optimization**: Sharp-based scripts for generating responsive JPG/WebP variants
- **Accessibility**: Pa11y integration for automated checks (WCAG2AA standard)
- **Animations**: AOS for subtle scroll animations
- **SEO**: Centralized metadata with OpenGraph support
- **Asset Management**: Organized public/assets and public/images directories

### In Progress
- Home page migration (index.astro) with optimized images and responsive design
- Font loading with display=swap for performance

## Todo

Based on the AUDITnPLAN, the following phases remain:

### Phase 2: Component Architecture (Continue)
- Migrate remaining pages (about, adhs, assessment, blaulicht, schule)
- Expand component library (Navigation, Footer, Contact Form)
- Implement dynamic content loading

### Phase 3: Asset Optimization (Enhance) ✅
- Automate image pipeline in build process
- Optimize videos and audio files
- Implement lazy loading for all media

### Phase 4: UI/UX Enhancements
- Add Framer Motion for advanced animations
- Implement sticky navigation with active states
- Enhance mobile menu and responsive design
- Add loading states and error handling

### Phase 5: Deployment & SEO
- Set up Vercel/Netlify deployment
- Implement structured data (Schema.org)
- Add sitemap and robots.txt
- Performance monitoring and Lighthouse audits

### Additional Tasks
- Complete accessibility audits and fixes
- Add internationalization (i18n) if needed
- Implement contact forms and backend integration
- Add analytics and tracking

## Project Structure

```text
web/
├── .astro/                 # Generated types
├── .gitignore
├── .pa11yrc.json           # Accessibility config
├── .vscode/                # VS Code settings
├── ACCESSIBILITY-REPORT.md # Audit reports
├── ACCESSIBILITY.md        # Accessibility guidelines
├── astro.config.mjs        # Astro configuration
├── index.html              # Legacy HTML (to be removed)
├── package.json
├── package-lock.json
├── README-images.md        # Image optimization notes
├── README.md               # This file
├── tailwind.config.cjs     # Tailwind configuration
├── tsconfig.json           # TypeScript config
├── dist/                   # Build output
├── node_modules/
├── public/
│   ├── favicon.svg
│   ├── assets/             # Original assets
│   └── images/             # Optimized images
├── scripts/
│   ├── a11y-check.mjs      # Accessibility scripts
│   ├── a11y-run-all.mjs
│   ├── optimize-images.cjs # Image optimization
│   └── optimize-images.js
└── src/
    ├── components/         # Reusable UI components
    ├── layouts/            # Page layouts
    ├── lib/                # Utilities (site config)
    ├── pages/              # Astro pages
    ├── scripts/            # Client-side scripts
    └── styles/             # Global styles
```

## Commands

All commands are run from the `web/` directory:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run images:optimize` | Optimize images using Sharp                      |
| `npm run a11y`            | Run accessibility checks (WCAG2AA)               |
| `npm run a11y:local`      | Run accessibility checks on local server        |
| `npm run ci`              | CI pipeline: optimize, build, and check          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Getting Started

1. Navigate to the `web/` directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open `http://localhost:4321` in your browser

## Accessibility

Automated accessibility checks are integrated:
- Run `npm run a11y` after starting the dev server
- See `ACCESSIBILITY.md` for detailed guidelines
- Reports are generated in `ACCESSIBILITY-REPORT.md`

## Contributing

1. Follow the AUDITnPLAN for feature implementation
2. Ensure all changes pass accessibility checks
3. Optimize images before committing
4. Test on multiple devices and browsers

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Sharp Image Processing](https://sharp.pixelplumbing.com/)
