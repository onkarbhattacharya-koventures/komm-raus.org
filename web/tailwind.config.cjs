module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tablet': '900px'
    },
    extend: {
      colors: {
        // Material Design 3 Color System - Nature Inspired
        'md-primary': '#2e7d32',
        'md-on-primary': '#ffffff',
        'md-primary-container': '#b8f397',
        'md-on-primary-container': '#002204',

        'md-secondary': '#52634f',
        'md-on-secondary': '#ffffff',
        'md-secondary-container': '#d5e8cb',
        'md-on-secondary-container': '#111f0f',

        'md-tertiary': '#386666',
        'md-on-tertiary': '#ffffff',
        'md-tertiary-container': '#bcece8',
        'md-on-tertiary-container': '#00201e',

        'md-error': '#ba1a1a',
        'md-on-error': '#ffffff',
        'md-error-container': '#ffdad6',
        'md-on-error-container': '#410002',

        'md-surface': '#f8fdf6',
        'md-on-surface': '#181d18',
        'md-surface-variant': '#dbe5d8',
        'md-on-surface-variant': '#404942',

        'md-outline': '#707973',
        'md-outline-variant': '#bfc9bd',

        // Glassmorphism
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',

        // Legacy brand colors (keeping for compatibility)
        brand: {
          primary: '#d9a441',
          secondary: '#1f3a2f',
          dark: '#2a3f36',
          cardDark: '#3b5a4c',
          sand: '#e8dfcf',
          light: '#f4f4f2',
          text: '#1f2a24',
          blue: '#2f4c73',
          yellow: '#f1b800',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['"Roboto Slab"', 'Georgia', 'serif'],
      },
      fontSize: {
        'huge': ['3rem', { lineHeight: '1.05' }],
        // Material Design 3 Typography Scale
        'md-display-large': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'md-headline-large': ['2rem', { lineHeight: '1.25' }],
        'md-title-large': ['1.375rem', { lineHeight: '1.4' }],
        'md-body-large': ['1rem', { lineHeight: '1.5', letterSpacing: '0.015em' }],
        'md-label-large': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      spacing: {
        // Material Design 3 Spacing Scale
        'md-1': '0.25rem',
        'md-2': '0.5rem',
        'md-3': '0.75rem',
        'md-4': '1rem',
        'md-5': '1.25rem',
        'md-6': '1.5rem',
        'md-8': '2rem',
        'md-12': '3rem',
        'md-16': '4rem',
      },
      borderRadius: {
        // Material Design 3 Shape Scale
        'md-extra-small': '0.25rem',
        'md-small': '0.5rem',
        'md-medium': '0.75rem',
        'md-large': '1rem',
        'md-extra-large': '1.5rem',
        'md-full': '9999px',
      },
      boxShadow: {
        // Material Design 3 Elevation
        'md-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'md-2': '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'md-3': '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
        // Glassmorphism shadow
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        // Glassmorphism card
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem',
        },
        // Audience card (similar to glass-card)
        '.audience-card': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem',
        },
        // Cards grid
        '.cards': {
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },
        '@media (min-width: 640px)': {
          '.cards': {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          },
        },
        '@media (min-width: 1024px)': {
          '.cards': {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          },
        },
        // CTA Hero
        '.cta-hero': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem',
        },
        // Strip image
        '.strip-image': {
          width: '100%',
        },
        // Hero h1
        '.hero-h1': {
          fontFamily: '"Roboto Slab", serif',
          fontSize: '3.5rem',
          fontWeight: '400',
          lineHeight: '1.2',
          letterSpacing: '-0.015em',
        },
      });
    },
  ],
};
