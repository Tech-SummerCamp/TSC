/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00FF41',
        'gray-900': '#1a1a1a',
        'gray-300': '#e0e0e0',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'sans': ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40) 1s forwards',
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideUp': 'slideUp 0.6s ease-out forwards',
        'noise': 'noise 3s steps(10) infinite',
        'section-glitch-1': 'section-glitch-1 2s ease-in-out infinite',
        'section-glitch-2': 'section-glitch-2 2s ease-in-out infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'arrow-move': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        noise: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '10%': { backgroundPosition: '-5% -10%' },
          '20%': { backgroundPosition: '-15% 5%' },
          '30%': { backgroundPosition: '7% -25%' },
          '40%': { backgroundPosition: '20% 25%' },
          '50%': { backgroundPosition: '-25% 10%' },
          '60%': { backgroundPosition: '15% 5%' },
          '70%': { backgroundPosition: '0% 15%' },
          '80%': { backgroundPosition: '25% 35%' },
          '90%': { backgroundPosition: '-10% 10%' },
        },
        'section-glitch-1': {
          '0%, 100%': { clipPath: 'inset(40% 0 61% 0)' },
          '20%': { clipPath: 'inset(92% 0 1% 0)' },
          '40%': { clipPath: 'inset(43% 0 1% 0)' },
          '60%': { clipPath: 'inset(25% 0 58% 0)' },
          '80%': { clipPath: 'inset(54% 0 7% 0)' },
        },
        'section-glitch-2': {
          '0%, 100%': { clipPath: 'inset(25% 0 58% 0)' },
          '20%': { clipPath: 'inset(54% 0 7% 0)' },
          '40%': { clipPath: 'inset(40% 0 61% 0)' },
          '60%': { clipPath: 'inset(92% 0 1% 0)' },
          '80%': { clipPath: 'inset(43% 0 1% 0)' },
        },
      },
    },
  },
  plugins: [],
}