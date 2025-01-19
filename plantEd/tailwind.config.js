/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Inter"', "sans-serif"],
      },
      color: {
        primaryGreen: "#386641",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
