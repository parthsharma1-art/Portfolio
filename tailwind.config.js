/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#08090d',
        surface: '#0f1118',
        card: '#131622',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: {
          DEFAULT: '#38bdf8', // electric sky/cyan
          hover: '#0ea5e9',
          glow: 'rgba(56, 189, 248, 0.25)',
        },
        violet: {
          accent: '#818cf8',
        },
        emerald: {
          accent: '#10b981',
        },
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'flow': 'flow 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(56, 189, 248, 0.2), 0 0 30px rgba(56, 189, 248, 0.05)' },
          '50%': { boxShadow: '0 0 25px rgba(56, 189, 248, 0.4), 0 0 50px rgba(56, 189, 248, 0.15)' }
        },
        flow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' }
        }
      }
    }
  },
  plugins: []
}
