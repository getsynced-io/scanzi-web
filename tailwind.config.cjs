/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#051E56",
        lightDarkBlue: "#051E56",
      },
    },
  },
  plugins: [],
};
