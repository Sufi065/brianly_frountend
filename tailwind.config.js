/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      purple:{
        300:"#3e0e7fe",
        500:"#3e38a7",
        600:"#5046e4",
      }
    },
  },
  plugins: [],
}

