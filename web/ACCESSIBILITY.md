# Accessibility checks

Steps to run automated accessibility checks locally:

1. Start the dev server: `npm run dev` (defaults to http://localhost:4323)
2. Run the Pa11y scan: `npm run a11y` (this uses the `.pa11yrc.json` config and WCAG2AA standard)

Notes:
- Pa11y is a fast smoke-check tool and doesn't replace manual testing; use it to catch common issues (contrast, missing alt, ARIA misuse).
- For CI: add a job that runs the dev server (or `astro preview` from a production build) and executes `npm run a11y`.
- Consider adding visual/manual tests (Lighthouse, axe DevTools, keyboard-only navigation, screen reader checks).