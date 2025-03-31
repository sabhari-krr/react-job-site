/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto','sans-serif'],
      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
};
