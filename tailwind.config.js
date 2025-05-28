/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        accent: '#7A4EA6',
        lightPurple: '#FCEDFF',
        darkGray: '#A4A4A4',
      },
    },
  },
  plugins: [],
}
