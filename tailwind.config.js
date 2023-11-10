/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'heroTxt':'#36382E',
        'richBlack':'#101419',
        'oxford':'#061A40',
        'chrys':'#531CB3'
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

