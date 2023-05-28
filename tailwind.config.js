/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      }
    },
    colors: {
      primary: {
        default: '#4f46e5',
        accent: '#818cf8'
      },
      secondary: {
        default: '#e7e5e4',
        accent: '#f5f5f4'
      },
      tertiary: {
        default: '#2563eb',
        accent: '#60a5fa'
      },
      white: '#ffffff',
      black: '#000000'
    }
  },
  plugins: []
};
