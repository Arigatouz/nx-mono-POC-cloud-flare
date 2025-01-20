/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/src/**/*.{html,ts}', './libs/**/src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#FF6363',
          dark: '#63beff',
        },
      },
    },
  },
  plugins: [],
};
