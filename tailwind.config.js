/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "protfolio-green": "rgb(210,234,188)",
        "protfolio-yellow": "rgb(254,245,154)",
        "protfolio-blue": "rgb(173,237,252)",
        "protfolio-purple": "rgb(225, 213, 249)",
        "protfolio-seagreen": "rgb(207,231,226)",
        "protfolio-pink": "rgb(255,206,211)",
      },
    },
  },
  plugins: [],
};
