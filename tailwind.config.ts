import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'architect-green': '#2A2D22',
        'technical-violet': '#B7A9D9',
        'neutral-grey': '#E8E7E3',
        'acid-accent': '#DAF064',
        memoryBank: {
          'web-app': '#B7A9D9',
          'saas': '#DAF064',
          'ai-tool': '#2A2D22',
          'crypto-app': '#D1B67A',
          'data-dashboard': '#9EB9E8',
          'landing': '#E8E7E3',
        },
      },
      fontFamily: {
        display: ['var(--font-clash-display)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '32px',
        'xl': '64px',
      },
      transitionTimingFunction: {
        'bauhaus': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
    },
  },
  plugins: [],
}

export default config

