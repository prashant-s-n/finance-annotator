const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class', // Add this line to enable class-based dark mode
  theme: {
    extend: {
      animation: {
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-icon': 'bounce-icon 1.5s ease-in-out infinite',
        'fade-in-out': 'fade-in-out 3s ease-in-out infinite',
        'shimmer-fast': 'shimmer 1s ease-in-out infinite',
        'float-1': 'float-1 2s ease-in-out infinite',
        'float-2': 'float-2 2.5s ease-in-out infinite 0.3s',
        'float-3': 'float-3 2.2s ease-in-out infinite 0.7s',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'bounce-icon': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(5deg)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'translateY(-10px) translateX(3px) rotate(180deg)', opacity: '1' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scaleY(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-8px) translateX(-2px) scaleY(1.5)', opacity: '1' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scaleX(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-6px) translateX(2px) scaleX(2)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
