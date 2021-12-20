const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      primary: {
          '50': '#f5f4f2', 
          '100': '#ffefeb', 
          '200': '#ffd7cc', 
          '300': '#ffbfad', 
          '400': '#ff8e70', 
          '500': '#FF5E33', 
          '600': '#e6552e', 
          '700': '#bf4726', 
          '800': '#99381f', 
          '900': '#7d2e19'
      },
      secondary: {
        '50': '#fbf9f9', 
        '100': '#f7f3f2', 
        '200': '#eae1df', 
        '300': '#ddcfcb', 
        '400': '#c4aaa4', 
        '500': '#AB867D', 
        '600': '#9a7971', 
        '700': '#80655e', 
        '800': '#67504b', 
        '900': '#54423d'
    },
      gray: colors.stone,
      white: colors.white,
      positive: colors.green,
      negative: colors.red,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}