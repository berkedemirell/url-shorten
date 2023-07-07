/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Header.jsx",
    "./src/components/Shorten.jsx",
    "./src/components/Statistics.jsx",
    "./src/components/Last.jsx",
    "./src/components/Footer.jsx",
  ],
  theme: {
    screens : {
      'md': {'max' : '930px'},
      'md-v2': {'max' : '720px'},
      'sml': {'max' : '630px'},
      'smm': {'max' : '400px'},
      'sms': {'max' : '350px'},
    },
    backgroundImage: {
      'inputBack' : "url('/src/images/bg-boost-desktop.svg')",
    },
    variants: {
      fill: ['hover', 'focus'],
    },
    width: {
      '10r' : '10rem',
      '4r' : '4rem',
      '5r' : '5rem',
      '7r' : '7rem',
      '3r' : '3rem',
      '12r' : '12rem',
      '15r' : '15rem',
      '20r' : '20rem',
      '25r' : '25rem',
      '34r' : '34rem',
      '50r' : '50rem',
    },
    colors: {
      'gray': 'hsl(0, 0%, 50%)',
      'gray-violet': 'hsl(257, 7%, 63%)',
      'dark-blue': 'hsl(255, 11%, 22%)',
      'dark-violet': 'hsl(260, 8%, 14%)',
      'mainRed': 'hsl(0, 70%, 50%)',
      'mainCyan': 'hsl(180, 66%, 49%)',
      'mainWhite': '#fff',
      'mainPurple': '#2C0B41',
      'lightGray': '#E9E9E9',
      'mainBlack': '#000',
      'lightBlack': '#0D0112',
    },
    fontFamily: {
      'pop': ['Poppins']
    },
    extend: {
    },
  },
  plugins: [],
}

