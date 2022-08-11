/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#008060",
          hover: "rgba(0, 110, 82, 1)",
          light: "#33975D38",
          dark: "rgb(51, 111, 93)",
        },
      },
      borderColor: {
        md: "4px",
      },
      boxShadow: {
        button: "0 5px 25px 0 rgb(0 0 0 / 25%)"
      }
    },
  },
  plugins: [],
};
