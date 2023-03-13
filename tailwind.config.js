const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        display: ['Hypatia'],
        sans: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: '#2F52B8',
          50: '#D8DFF5',
          100: '#C3CFF0',
          200: '#9BAEE5',
          300: '#728DDB',
          400: '#4A6CD0',
          500: '#2F52B8',
          600: '#25408F',
          700: '#1B2E66',
          800: '#101C3E',
          900: '#060A15',
        },
        green: {
          DEFAULT: '#26B489',
          50: '#CBF4E8',
          100: '#B6F0DE',
          200: '#8CE7CB',
          300: '#62DEB8',
          400: '#38D5A5',
          500: '#26B489',
          600: '#1E8E6C',
          700: '#16684F',
          800: '#0E4232',
          900: '#061C16',
        },
      },
    },
  },
}
