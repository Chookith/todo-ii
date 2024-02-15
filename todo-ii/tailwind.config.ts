import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropIn: {
          from: { transform: "translatey(-50px)", opacity: "0" },
          to: { transform: "translate(0)", opacity: "1" },
        },
        dropIn2: {
          from: { transform: "translatey(-60px)", opacity: "0" },
          to: { transform: "translate(0)", opacity: "1" },
        },
      },
      animation: {
        dropIn: "dropIn 1s ease 200ms backwards",
        dropIn2: "dropIn2 1400ms ease 400ms backwards",
      },
      colors: {
        coralPink: "#E08D79",
        orangeBuff: "#EBAC84",
        apricot: "#F1C2A7",
        dun: "#C9B5A6",
        darkCyan: "#3E6E7A",
        charcoal: "#364C59",
        gunMetalGrey: "#152328",
        darkRose: "#886059",
        cinereous: "#7F6D62",
      },
      flexBasis: {
        "1/24": "4.16666666666667%",
        "2/24": "8.33333333333333%",
        "3/24": "12.5%",
        "4/24": "16.66666666666667%",
        "5/24": "20.83333333333333%",
        "6/24": "25%",
        "7/24": "29.16666666666667%",
        "8/24": "33.33333333333333%",
        "9/24": "37.5%",
        "10/24": "41.66666666666667%",
        "11/24": "45.83333333333333%",
        "12/24": "50%",
        "13/24": "54.16666666666667%",
        "14/24": "58.33333333333333%",
        "15/24": "62.5%",
        "16/24": "66.66666666666667%",
        "17/24": "70.83333333333333%",
        "18/24": "75%",
        "19/24": "79.16666666666667%",
        "20/24": "83.33333333333333%",
        "21/24": "87.50000000000007%",
        "22/24": "91.66666666666667%",
        "23/24": "95.83333333333341%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
