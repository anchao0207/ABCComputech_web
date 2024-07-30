import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-slider-10": "infiniteSlider5 30s linear infinite",
        "infinite-slider-18": "infiniteSlider18 30s linear infinite",
        "infinite-slider-30": "infiniteSlider30 30s linear infinite",
      },
      keyframes: {
        infiniteSlider5: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-10rem * 5))",
          },
        },
        infiniteSlider18: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-18rem * 5))",
          },
        },
        infiniteSlider30: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-30rem * 5))",
          },
        },
      },
    },
    
  },
  plugins: [
    require('preline/plugin')
  ],
};
export default config;
