module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
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
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'huge': ['3rem', { lineHeight: '1.05' }],
      }
    },
  },
  plugins: [],
};
