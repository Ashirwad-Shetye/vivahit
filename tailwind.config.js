/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentPrimary: "#f97f29",
        accentSecondary: "#19283f",
        accentGreen: "#cce16a",
        accentGrey: "#f7f7f7",
        fontBlue: "#5f6187",
      },
      fontFamily: {
        Monsterrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
