/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      FiraCode: ["Fira Code", "monospace"],
      RaleWay: ["Raleway", "sans-serif"],
    },
    extend: {
      keyframes: {
        resize: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        resize: "resize 1s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
