/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {transform: "translate(0px, 0px)"},
          '33%': {transform: "translate(-100px, -40px)"},
          '66%': {transform: "translate(100px, 20px)"},
          '100%': {transform: "translate(0px, 0px)"},
        }
      },
      fontFamily: {
        'ranade': ['Ranade-Variable', 'sans-serif'],
        'switzer': ['Switzer-Variable', 'sans-serif']
      },
      fontSize: {
        'display': ['clamp(3rem, 12.4em - 0.5rem, 15em)'],
        'body': ['clamp(1rem, 2.75vw - 1rem, 2rem)'],
        'subheading': ['clamp(1.25rem, 4vw - 1rem, 2rem)'],
        'heading-1': ['clamp(1.75rem, 4.5vw - 1rem, 4rem)']
      }
    
    },
  },
  plugins: [],
}