module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/10": "10%",
      },
      backgroundImage: {
        homeImg: "url(assets/background_flipped.png)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
