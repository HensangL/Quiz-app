/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all React files
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        techno: ['"Press Start 2P"', 'system-ui', 'cursive'],
      },
    },
  },
  plugins: [],
};
