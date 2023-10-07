/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pressstart: '\'Press Start 2P\', cursive',
      },
      colors: {
        primary: '#ccf300',
        button: '#030b11',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
  daisyui: {
    themes: [],
  },
}

