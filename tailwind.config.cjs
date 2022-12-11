/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#051E56",
        lightDarkBlue: "rgba(5 ,30 ,86 ,0.64)",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
