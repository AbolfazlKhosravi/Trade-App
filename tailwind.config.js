/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
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
          '50%': { transform: 'translateX(-6px)' },
          '100%': {  transform: 'translateX(5px)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'button': ' rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      }
    },
  },
  plugins: [],
};
