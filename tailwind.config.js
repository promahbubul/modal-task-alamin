/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#35384B",
        gray: "#636468",
        silver: "#EFEEF3",
        silver2: "#D6D5DB",
      },
    },
    variants: {
      scrollbar: ["rounded"], // Enable rounded variant for scrollbar
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
