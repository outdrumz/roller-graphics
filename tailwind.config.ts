import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          951: 'rgba(79, 70, 229, 1)',
        },
        gray: {
          950: 'hsla(0, 0%, 100%, 0.7);',
          951: 'hsla(0, 0%, 100%, 0.4);',
          952: '#373b64',
        },
        orange: {
          951: '#EB8A18',
        },
        red: {
          951: '#EB183E',
        },
        blue: {
          951: '#186DEB',
        },                
        linen: {
          951: '#F8EFE6',
        },  
      },
    },
  },
  plugins: [],
};
export default config;
