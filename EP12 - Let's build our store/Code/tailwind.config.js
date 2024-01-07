/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tangerine-faint": "#eed2c1",
        "tangerine-deep": "#f57126",
      },
      fontFamily: {
        display: "Outfit, sans-serif"
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}