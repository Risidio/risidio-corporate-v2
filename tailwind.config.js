/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '760px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        '75xl': '88px',
        button: ['13px', { letterSpacing: '0', fontWeight: '700' }],
        navbar: ['15px', { letterSpacing: '0', fontWeight: '500' }],
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-bg': "url('/img/footer-bg.svg')",
        'static-bg': "url('/img/static-bg.svg')",
        'susta-bg': "url('/img/susta-bg.png')",
        'nav-bg': "url('/img/nav-bg.png')",
        'card-bg': "url('/img/Card.png')",
        'crm-bg': "url('/img/risidioCRM.png')",
        'earth-bg': "url('/img/earth.png')"
      },
      colors: {
        'risidio-yellow': '#f9b807',
        primary: '#5fbdc1',
        purple: '#63037e',
        'bg-purple': '#5154a1',
        'base-grey': '#383838',
        'bg-lighter': '#f5f5f5',
        'susta-blue': '#30b3b8',
        'governance': '#FAB808',
        'strategy': '#5FBDC1',
        'risk': '#E94A3D'
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
