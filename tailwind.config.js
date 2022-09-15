module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./*.html', './js/script.js'],
    options: {
      safelist: ['dark'],
    },
  },
  content: ['./*.html', './js/script.js'],
  theme: {
    extend: {
      colors: {
        ghostwhite: '#f8F5F2',
        softGreen: '#078080',
        darkBrown: '#232323',
        strongOrange: '#f45d48',
      },
    },
  },
  plugins: [],
};
