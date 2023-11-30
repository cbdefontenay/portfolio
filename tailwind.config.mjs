/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#b2b710",
        secondary: "#14d8e2",
        tertiary: "#143b3d",
        darkBg: "#0c0c0c",
        lightBg: "#fcfbf9",
        error: "#d82111",
        gradientfrom: "#2b5876",
        gradientto: "#4e4376",
        gradientfromlight: "#f6d5f7",
        gradienttolight: "#fbe9d7",
      },
      fontFamily: {
        gardamondRegular: ["gardamondRegular", "EBGardamond-Regular"],
        gardamondMedium: ["gardamondMedium", "EBGardamond-Medium"],
        gardamondBold: ["gardamondBold", "EBGardamond-Bold"],
      },
    },
  },
  plugins: [],
};
