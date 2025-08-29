/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#018080',
        'custom-blue': '#00346c',
      },
    },
  },
  plugins: [],
};
