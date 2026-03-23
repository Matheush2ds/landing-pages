/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFB800',
          'yellow-hover': '#E5A600',
          dark: '#050505',
          card: '#121212',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        text: {
          main: '#FFFFFF',
          muted: '#A3A3A3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-green': 'pulse-green 2s infinite',
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '70%': { boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' },
        }
      }
    },
  },
  plugins: [],
}