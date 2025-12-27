/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'max-1167': { max: '1167px' },
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ],

  plugins: [],
}