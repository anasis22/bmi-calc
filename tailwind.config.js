/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        fromColor : '#aa4b6b',
        midColor : '#6b6b83',
        endColor : '#3b8d99'
      },
      keyframes : {
        calcDrop : {
          '0%' : {transform : 'translateY(-1000px)'},
          '100%' : {transform : 'translateY(0px)'}
        },
        categDrop : {
          '0%' : {transform : 'translateY(-1000px)'},
          '100%' : {transform : 'translateY(0px)'}
        },
        headDrop : {
          '0%' : {transform : 'translateY(-1000px)'},
          '100%' : {transform : 'translateY(0px)'}
        },
      },
      animation : {
        calcDrop : 'calcDrop 1s ease forwards',
        categDrop : 'categDrop 2.5s ease forwards',
        headDrop : 'headDrop 3.5s ease forwards',
      }
    },
  },
  plugins: [],
}