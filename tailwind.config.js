/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'accent-1': 'hsl(var(--accent-1))',
        'accent-2': 'hsl(var(--accent-2))',
        'accent-highlight': 'hsl(var(--accent-highlight))',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Italiana', 'serif'],
      },
    },
  },
  plugins: [],
};