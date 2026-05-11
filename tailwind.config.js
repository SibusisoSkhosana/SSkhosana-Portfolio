/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {

      colors: {
        space: {
          50: '#f8f9ff',
          100: '#f0f4ff',
          200: '#e0e8ff',
          300: '#c5d4ff',
          400: '#a3b8ff',
          500: '#7c9eff',
          600: '#5a7fff',
          700: '#4263ff',
          800: '#2d4ae6',
          900: '#1a2e99',
        },
        nebula: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            opacity: '0.7',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)',
            opacity: '1',
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 49%': { opacity: '0' },
          '50%, 100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
