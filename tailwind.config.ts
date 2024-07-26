import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        container: "white",
        "container-dark": "hsl(209 23% 22% / <alpha-value>)",
        "on-container": "hsl(200, 15%, 8% / <alpha-value>)",
        "on-container-dark": "white",

        surface: "hsl(0 0% 98% / <alpha-value>)",
        "surface-dark": "hsl(207 26% 17% / <alpha-value>)",

        "dark-gray": "hsl(0 0% 52% / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
