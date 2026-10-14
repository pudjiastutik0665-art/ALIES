/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarydark: '#7b542f',
        primarymed: '#b6771d',
        accentgold: '#ff9d00',
        softcream: '#ffcf71',
        backgroundlight: '#fdfbf7',
        charcoalgrey: '#2d2d2d'
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
