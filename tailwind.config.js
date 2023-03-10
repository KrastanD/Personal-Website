/* eslint-disable @typescript-eslint/no-var-requires */
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
        homeImg: "url(assets/sunset.jpg)",
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
        dockerBlue: "#0073EC",
        goBlue: "#027D9C",
        charlestonGreen: {
          800: "#0B1820",
          700: "#202D35",
          600: "#36434C",
          300: "#B3C2CC",
          200: "#CFDEE9",
          100: "#EBFBFF",
        },
        darkGunmetal: {
          800: "#000C15",
          700: "#182229",
          600: "#2D373F",
          300: "#A8B4BD",
          200: "#C3CFD9",
          100: "#DFECF5",
        },
        linkedInBlue: "#0077B5",
      },
      fontFamily: {
        sans: ["SourceSansPro", ...defaultTheme.fontFamily.sans],
        ptsans: ["PTSans", "sans-serif"],
        lobster: ["LobsterTwo-Regular"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
