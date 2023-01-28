/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '75xl': '88px',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-bg': "url('/img/footer-bg.svg')",
      },
      colors: {
        'risidio-yellow': '#f9b807',
        primary: '#5fbdc1',
        purple: '#63037e',
        'bg-purple': '#5154a1',
        'base-grey': '#383838',
      },
      zIndex: {
        1: '-100',
      },
      minHeight: {
        video: '975px',
      },
    },
  },
  plugins: [],
};
