/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#000000',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm:'3rem'
        }
      }
    },
  },
  plugins: [],
}