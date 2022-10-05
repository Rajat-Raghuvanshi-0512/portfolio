/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "415px",
      },
      backgroundImage: {
        bgLight: "url('/src/assets/bgIMG.png')",
        bgDark: "url('/src/assets/bgWhite.png')",
      },
    },
  },
  plugins: [],
};
