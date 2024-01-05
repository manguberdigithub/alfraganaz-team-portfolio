import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
      },
      colors: {
        "light-grey": "#E1E1E1",
        "bluish-green": "#00094A4D ",
        gradient: "#0F0F10",
      },
      height: {
        "125": "32rem",
      },
      fontSize: {
        "64": "4rem",
      },
      screens: {
        xs: { min: "359px", max: "639px" },
        // (min-width: 360px and max-width: 639px)
        sm: { min: "640px", max: "767px" },
        //  (min-width: 640px and max-width: 767px)

        md: { min: "768px", max: "1023px" },
        //  (min-width: 768px and max-width:1023)

        lg: { min: "1024px", max: "1279px" },
        //  (1024px and max-width: 1279px)

        xl: { min: "1280px", max: "1535px" },
        //  (min-width: 1280px and max-width: 1535px)

        "2xl": { min: "1536px", max: "1719px" },
        // (min-width: 1536px and max-width: 1720px)

        "3xl": { min: "1720px", max: "1920px" },
        // (min-width: 1720px and max-width: 1920px)
      },
    },
  },
  plugins: [],
};
export default config;
