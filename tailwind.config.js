/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  media: false, // or 'media' or 'class'
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
        brand1: "#CCDAD1",
        brand2: "#9CAEA9",
        brand3: "#788585",
        brand4: "#6F6866",
        brand5: "#38302E",
        kdGreen: "#67cc8e",
        reactBlue: "#61DAFB",
        reduxPurple: "#764ABC",
        sassPink: "#BF4080",
        routerRed: "#F44250",
        craGreen: "#03D3AC",
        tsBlue: "#3077C6",
        htmlOrange: "#E54B20",
        cssBlue: "#264DE4",
        tailwindBlue: "#37BCF8",
        vitePurple: "#646cff",
        flutterBlue: "#0367D7",
        mongoGreen: "#00EC64",
        reactNavigationPurple: "#8C90DF",
        graphQLPurple: "#DF0298",
      },
      fontFamily: {
        sans: ["SourceSansPro", ...defaultTheme.fontFamily.sans],
        ptsans: ["PTSans", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
