/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./shared/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        background: "#F1F3F5",
      },
      backgroundImage: {
        "landing-page": 'url("/public/images/landing-page-background.jpg")',
      },
      screens: {
        "2xl": "1600px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
