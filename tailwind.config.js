module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      lg2: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "#0c0d19",
        grayBlue: "#242530",
        grayYellow: "#19180e",
        darkYellow: "#7d660b",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
