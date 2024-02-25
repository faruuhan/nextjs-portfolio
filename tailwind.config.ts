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
        move: "move 10s ease-in-out infinite",
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
        move: {
          "0%": {
            transform: "scale(1) translate(10px, -30px)",
          },
          "38%": {
            transform: "scale(0.8) translate(40vw, 30vh) rotate(160deg)",
          },
          "40%": {
            transform: "scale(0.8) translate(40vw, 30vh) rotate(160deg)",
          },
          "70%": {
            transform: "scale(1.3) translate(0vw, 40vh) rotate(-20deg)",
          },
          "80%": {
            transform: "scale(1.3) translate(40vw, 30vh) rotate(160deg)",
          },
          "100%": {
            transform: "scale(1) translate(10px, -30px) rotate(160deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
