/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00cc66',
          dark: '#00994d',
          light: '#00ff80',
          50: 'rgba(0, 204, 102, 0.05)',
          100: 'rgba(0, 204, 102, 0.1)',
          200: 'rgba(0, 204, 102, 0.2)',
          300: 'rgba(0, 204, 102, 0.3)',
          400: 'rgba(0, 204, 102, 0.4)',
        },
        dark: {
          bg: '#1a1a2e',
          card: '#242444',
          border: '#3a3a5c',
          text: '#e6e6e6',
          muted: '#a0a0a0',
        },
        light: {
          bg: '#f8f9fa',
          card: '#ffffff',
          border: '#e9ecef',
          text: '#333333',
          muted: '#6c757d',
        }
      },
      boxShadow: {
        'custom-sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'custom-md': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'custom-lg': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'primary': '0 2px 8px rgba(0, 204, 102, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-3px)' },
          '60%': { transform: 'translateY(-2px)' },
        }
      }
    },
  },
  plugins: [],
}
