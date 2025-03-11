/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#181c2b',
        secondaryColor: '#111d2b',
        hoverBg: '#000000ab',
        buttonBg: '#79b89e'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          sm:'3rem'
        }
      },
      constainerTwo: {
        center: true,
        padding: {
          DEFAULT: 0
        }
      },
      boxShadow: {
        customShadow: '0 2px 4px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}