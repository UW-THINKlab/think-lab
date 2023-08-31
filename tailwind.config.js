/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#03045E',
        'secondary-blue': '#CCCCDE',
        'highlight-blue': '#9e9ec0',
      }
    },
  },
  plugins: [],
}

