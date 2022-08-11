/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        xl: "1570px",
        lg: "1280px",
        
      },
      colors: {
        primary: {
          DEFAULT: "#33975D",
          light: "#33975D38",
        },
        secondary: {},
        text: {
          DEFAULT: "#000000",
          light: "#1D1D1D",
        },
        background: {
          DEFAULT: "#fff",
          extralight: "#F6F6F6",
          light: "#D9D9D9",
          dark: "#B7B7B7",
        },
      },
      text: {},
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        body: ['"Nunito"'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
