/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ensure dark mode is applied manually using the "dark" class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add your preferred font here
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
