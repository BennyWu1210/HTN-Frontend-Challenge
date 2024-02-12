/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "metal": "#22333B",
        "khaki": "#c6ac8f",
        "walnut": "#5e503F",
        "white": "#f3f3f3",
        "almond": "#e1e0d5",
      },
      spacing: {
        '30vh': '30vh',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)"
        ]
      },
    },
  },
  plugins: [],
}

