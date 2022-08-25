/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize:{
        '5xl': '3rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      paddingBottom:{
        'revert': 'revert'
      },
      keyframes: {
        animateUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
        fadeIn:{
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
      }
    },
  },
  plugins: [],
}