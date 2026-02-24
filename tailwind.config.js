/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#32556d',
          light: '#7caacc'
        },
        accent: {
          DEFAULT: '#98d1fe',
          dark: '#7caacc'
        },
        background: '#f6f8f1',
        darkGray: '#32556d'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
