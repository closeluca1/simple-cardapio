module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { 'margin-top': '0', 'opacity': '0'},
          '100%': {'margin-top': '20vh', 'opacity': '1'}
        }
      },
      animation: {
        'appearModal': 'appear .35s linear' 
      }
    },
  },
  plugins: [],
}
