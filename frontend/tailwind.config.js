module.exports = {
  // mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        layoutContainer: '100rem',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
