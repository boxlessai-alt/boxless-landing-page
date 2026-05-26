/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050510',
        'bg-secondary': '#0a0a1f',
        'accent-cyan': '#00e5ff',
        'accent-purple': '#7b2fff',
        'accent-plum': '#6B2D5E',
        'accent-amber': '#F59E0B',
        'text-primary': '#f0f4ff',
        'text-secondary': '#8892b0',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
