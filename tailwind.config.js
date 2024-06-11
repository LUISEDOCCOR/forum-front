/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cBlack":"#151515",
        "neonColor":"#A7FD2A",
        "cGray":"#A5A5A5",
      }
    },
  },
  plugins: [],
}

