import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '50px',
      },
      colors: {
        primary: '#245D51',
        secondary: '#CB8461',
        'light-white': 'rgba(255,255,255,0.6)',
        gray: '#808080',
      },
      boxShadow: {
        'custom-shadow': '0px 42px 34px 0px #245D514B',
      },
    },
  },
  plugins: [],
};
export default config;
