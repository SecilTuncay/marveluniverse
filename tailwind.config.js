module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec1d24",
        secondary: "#151515",
        borderGray: "#bdc2cb",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

/*  */
