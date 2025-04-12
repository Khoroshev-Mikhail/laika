/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        '5': '20px',
      },
      // fontFamily: {
      //   sans: ['var(--font-darkcyr)', ...fontFamily.sans],
      // },
      screens: {
        'xs': '480px',
        'sm': '640px', // => @media (min-width: 640px) etc
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1600px',
      },
      colors: {
        '_orange': '#FF5924',
        '_gray': '#252525',
        '_blue': '#3466E0',
        '_purple': '#41B7CF',
      },
    },
  },
  plugins: [],
}
