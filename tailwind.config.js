/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'game-card': "url('/fifa-22-carrying-progress-over.png')",
      }),
      fontSize: {
        xsm: '0.5rem',
      }
    },
  },
  plugins: [],
}
