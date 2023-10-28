import type { Config } from "tailwindcss";

const config = {
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
      animation: {
        "slide-up": "slide-up 1s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(30%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
