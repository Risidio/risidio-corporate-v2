/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-bg': "url('/img/footer-bg.svg')",
      },
      colors: {
        'risidio-yellow': '#f9b807',
      },
    },
  },
  plugins: [],
};
