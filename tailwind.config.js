/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e3f2ff",
          100: "#b3daff",
          200: "#81c2ff",
          300: "#4faaff",
          400: "#1d92ff",
          500: "#0078e6", // main shade
          600: "#005db4",
          700: "#004282",
          800: "#002851",
          900: "#001021",
        },
        secondary: {
          50: "#fff3e3",
          100: "#ffd9b3",
          200: "#ffbf81",
          300: "#ffa54f",
          400: "#ff8b1d",
          500: "#e67200",
          600: "#b45900",
          700: "#823f00",
          800: "#512600",
          900: "#211000",
        },
      },
      fontFamily:{
        body:'Poppins,sans-serif',
        sans:'Poppins,sans-serif',
        heading:'Merriweather, serrif'
      }
    },
  },
  plugins: [],
};
