/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16213a",
        paper: "#fbf9f4",
        gold: "#b08a3e",
        line: "#e7e0d1",
        standpoint: {
          coral: "#FF5E3A",
          amber: "#FFB347",
          teal: "#14B8A6",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
