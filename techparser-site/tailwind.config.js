module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'className'
  theme: {
    screens: {
      xs: '320px',
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2560px',
      '4xl': '3840px',
      '5xl': '4096px',
      '6xl': '5120px'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      'bottom-5': 'bottom center -20rem',

      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'left-5': 'left bottom -2rem ',
      'left-6': 'left -2rem ',

      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top -13rem',
      'top-5': 'center top -18rem',
      'top-6': 'center top 0rem',
      'top-7': 'center top -25rem',
      'top-8': 'center top -35rem',
      'top-9': 'center top -80rem',
      'top-10': 'center top -100rem',
      'top-11': 'center top -135rem'
    },

    extend: {
      colors: {
        primary: '#FE8A71',
        primaryLight: '#FFF6F4',
        secondary: '#181926',
        textLight: '#5D5E67',
        textDark: '#181926',
        heroLightText: '#BABABE'
      },
      minHeight: {
        800: '850px',
        300: '300px',
        350: '355px',
        470: '570px',
        1130: '1130px',
        1300: '1300px',
        1400: '1400px'
      },
      backgroundImage: () => ({
        'action-img': "url('/darkBg.svg')",
        'doted-line': "url('/dotted.svg')",
        'hero-bg': "url('/heroBg.svg')",
        'double-oval': "url('/doubleOval.svg')",
        eclipse: "url('/eclipse.svg')",
        testimonial: "url('/testimonial.svg')",
        office: "url('/officeBg.svg')"
      }),

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    }
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus']
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          textDecoration: 'underline',
          'text-decoration-color': 'gray'
        }
      };
      addUtilities(extendUnderline);
    }
  ]
};
