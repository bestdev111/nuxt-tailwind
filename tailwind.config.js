module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato, sans-serif'
      },
      colors: {
        primary: '#319795',
        'primary-light': '#81E6D9',
        secondary: '#3182CE',
        tertiary: '#4A5568',
        gray: {
          100: '#F7FAFC',
          200: '#EBF4FF',
          300: '#CBD5E0',
          400: '#718096',
          500: '#2D3748',
        },
        blue: '#3182CE',
        brown: {
          100: '#00000029',
          200: '#00000033',
          300: '#707070'
        }
      },
      backgroundImage: {
        'linear-1': 'linear-gradient(91deg, #319795 0%, #3182CE 100%)',
        'linear-2': 'linear-gradient(141deg, #EBF4FF 0%, #E6FFFA 100%)',
        'linear-3': 'linear-gradient(95deg, #319795 0%, #3182CE 100%)',
      },
      boxShadow: {
        'custom-1': '0px 3px 6px #00000029',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}