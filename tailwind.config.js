/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'pink-hair': 'var(--color-pink-hair)',
        'blue-eyes': 'var(--color-blue-eyes)',
        'green-jacket': 'var(--color-green-jacket)',
        'medal-gold': 'var(--color-medal-gold)',
        'blue-shirt': 'var(--color-blue-shirt)',
        'dark-eyes': 'var(--color-dark-eyes)',

        // Background Colors
        'city-bg': 'var(--color-city-bg)',
        'tech-bg': 'var(--color-tech-bg)',
        'card-dark': 'var(--color-card-dark)',

        // Text Colors
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-accent': 'var(--color-text-accent)',

        // Accent Colors
        'accent-1': 'var(--color-accent-1)',
        'accent-2': 'var(--color-accent-2)',
        'accent-3': 'var(--color-accent-3)',
      },
      perspective: {
        '800': '800px',
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'pulse': 'pulse 10s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.05' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
