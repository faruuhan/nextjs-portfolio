const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
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
        "zoom-in": "zoom-in 1s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        "zoom-in": {
          "0%": { opacity: 0, transform: "scale(70%)" },
          "100%": { opacity: 1, transform: "scale(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
