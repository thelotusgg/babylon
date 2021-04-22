module.exports = {
  // mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
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
