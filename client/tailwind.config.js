module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      fontFamily: {
        'rubik': ['rubik', 'sans-serif']
      }
    },
    extend: {
      backgroundImage: theme => ({
        'dbd-main': "url('img/bg.png')"
      }),
      fontSize: {
        'mdLg': '1.075rem'
      },
      outline: {
        blue: ['1px solid #5757b5', '1px']
      },
      height: {
        '50': '12.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
