import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coralPink: "#E08D79",
        orangeBuff: "#EBAC84",
        apricot: "#F1C2A7",
        dun: "#C9B5A6",
        darkCyan: "#3E6E7A",
        charcoal: "#364C59",
        gunMetalGrey: "#152328",
      },
    },
  },
  plugins: [],
};
export default config;
