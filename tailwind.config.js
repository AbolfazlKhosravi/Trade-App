/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
      animation: {
        'arrow-left': 'arrow-left 1.5s ease-out infinite',
      },
      keyframes: {
        'arrow-left': {
          '0%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(-10px)' },
          '100%': {  transform: 'translateX(5px)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};
