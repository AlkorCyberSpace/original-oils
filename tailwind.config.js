/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4b10f",
        darkBrown: "#5a3b00",
        greenKerala: "#2fa84f",
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
        gothic: ["var(--font-gothic)"], 
      },
    },
  },
  plugins: [],
};
