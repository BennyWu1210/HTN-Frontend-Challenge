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
        "almond": "#eae0d5",
        "black-light": "rgb(27, 38, 44, 1)",
        "metal-light": "#22333BAA",
      },
      width: {
        '30vh': '30vh',
        'card': '300px',
        'scrollable': '1500px',
        'login-wid': '470px',
        'event-wid': '1020px'
      },
      height: {
        'login-len': '510px',
        'event-len': '560px'
      },
      spacing: {
        '30vh': '30vh',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 255, 255, 0.35)"
        ]
      },
    },
  },
  plugins: [],
}

