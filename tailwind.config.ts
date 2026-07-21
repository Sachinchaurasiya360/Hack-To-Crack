import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        graphite: '#404040',
        slate: '#6B6B6B',
        surface: '#F8F8F8',
        'surface-2': '#F1F1F0',
        line: '#E8E8E8',
        accent: {
          DEFAULT: '#1B5E3F',
          strong: '#164E34',
          tint: '#EEF4F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Editorial display scale
        'display-xl': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        shell: '1200px',
        prose: '640px',
      },
      spacing: {
        section: 'clamp(6rem, 12vw, 11rem)',
      },
      letterSpacing: {
        label: '0.18em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17,17,17,0.03), 0 8px 24px -12px rgba(17,17,17,0.08)',
        lift: '0 2px 4px rgba(17,17,17,0.04), 0 18px 40px -16px rgba(17,17,17,0.14)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
