/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#000000',
        secondaryColor: '#9e7b2c',
        hoverBg: '#000000ab'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          sm:'3rem'
        }
      },
      boxShadow: {
        customShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}