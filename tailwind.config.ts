import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      beige :{
        light: "#FAF3E1",
        DEFAULT: "#F5E7C6"
      },
      orange:  "#FF6D1F",
      gray: {
        light: "#383737",
        dark: "#222222"
      },
      black: "#010609"
    },
    extend: {
      fontFamily : {
        main: ["var(--font-main)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      fontSize: {
        "3xl": "2rem"
      },
      backgroundImage: {
        hero: "url('/hero-mobile.webp')",
        heroTablet: "url('/hero-tablet.webp')",
        heroDesktop: "url('/hero.webp')",
      },
      screens: {
        "lg": "1280px"
      },
    },
  },
  plugins: [],
};
export default config;
