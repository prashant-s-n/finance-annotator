import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/theme-context';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-50
        p-3 rounded-full
        transition-all duration-300 ease-in-out
        transform hover:scale-110 active:scale-95
        shadow-lg hover:shadow-xl
        backdrop-blur-sm
        ${
          theme === 'light'
            ? 'bg-white/80 text-gray-800 hover:bg-white border border-gray-200'
            : 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700 border border-gray-600'
        }
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FiMoon className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <FiSun className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
      )}
    </button>
  );
};