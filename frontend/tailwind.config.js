module.exports = {
  // mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      minWidth: {
        '2/5': '40%',
      },
      maxWidth: {
        layoutContainer: '100rem',
      },
      spacing: {
        layoutContainer: '100rem',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
