module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/10": "10%",
      },
      backgroundImage: {
        homeImg: "url(assets/background_flipped_cropped.webp)",
      },
      height: {
        "1/10": "10%",
        "1/20": "5%",
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
      colors: {
        kdGreen: "#67cc8e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};