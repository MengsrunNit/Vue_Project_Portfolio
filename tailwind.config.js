/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,vs, ts, jsx, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poopins', 'sans-serif']
      }, 
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

