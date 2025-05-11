/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Playfair Display', 'Georgia', 'serif'],
      body: ['Minion Pro', 'Georgia', 'serif'],
      mono: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    extend: {
      // Colors are now managed via CSS variables in src/styles/color-scheme.css
      // and src/index.css. They can be used directly in Tailwind classes
      // e.g., bg-[var(--color-ivory)], text-[var(--color-text-primary)]
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
        'pulse': 'pulse 10s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
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
