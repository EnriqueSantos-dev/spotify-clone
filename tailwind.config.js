/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        green: {
          600: "#1ED760",
        },
      },
      backgroundImage: {
        bg: "url('/bg.svg')",
      },
      backgroundColor: {
        blue: "#2941ab",
        overlay: "rgba(0, 0, 0, 0.8)",
      },
      backgroundSize: {
        scalebg: "123%",
      },
    },
  },
  plugins: [],
};
