/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qz: {
          navy: '#0B1938',
          dark: '#070F22',
          red: '#e11d48',
          crimson: '#dc2626',
          gold: '#f59e0b',
          yellow: '#fbbf24',
          blue: '#2563eb',
          sky: '#0284c7',
          emerald: '#10b981',
          surface: '#ffffff',
          card: '#f8fafc',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
