/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        big: "0px 7px 32px rgb(0 0 0 / 35%);",
        massive: "0px 64px 64px rgba(0, 0, 0, 0.15), 0px 32px 32px rgba(0, 0, 0, 0.15), 0px 16px 16px rgba(0, 0, 0, 0.15), 0px 8px 8px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15);",
      },
      colors: {
        onyx: {
          50: "#F1F1F4",
          100: "#E3E3E8",
          200: "#C8C6D2",
          300: "#AFADBE",
          400: "#9490A7",
          500: "#787490",
          600: "#605D75",
          700: "#4B485B",
          800: "#34323F",
          900: "#1f1e26",
          950: "#1c1b22"
        },
        blue: {
          50: "#F6F6FE",
          100: "#ECEDFD",
          200: "#D0D1FB",
          300: "#B9BAF9",
          400: "#9395F5",
          500: "#6366F1",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        display: ["Clash Display", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  
    require("@tailwindcss/aspect-ratio"),
  ],
};
