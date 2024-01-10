/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f5ebe0",
        secondaryColor: "#e3d5ca",
        darkColor: "#d4a373",
        extraDarkColor: "#a98467",
      },
    },
  },
  plugins: [],
};
