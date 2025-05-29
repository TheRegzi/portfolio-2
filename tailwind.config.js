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
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.45)',
        md: '3px 3px 6px rgba(0,0,0,0.5)',
        none: 'none',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow')
      const utilities = Object.entries(textShadow).map(([key, value]) => {
        return {
          [`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`]: {
            textShadow: value,
          },
        }
      })
      addUtilities(utilities, ['responsive', 'hover'])
    },
  ],
}
