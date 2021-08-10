// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        layoutContainer: '100rem',
      },
      minWidth: {
        '1/2': '50%',
        '2/5': '40%',
      },
      spacing: {
        layoutContainer: '100rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
