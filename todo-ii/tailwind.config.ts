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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
