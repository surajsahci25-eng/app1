/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#6C3FC5',
        accent: '#E91E8C',
        warm: '#FAFAFA',
        teal: '#00BFA5'
      },
      borderRadius: {
        card: '16px'
      }
    }
  },
  plugins: []
};
