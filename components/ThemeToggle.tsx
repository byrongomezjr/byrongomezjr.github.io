'use client';

import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') ?? 'dark';
    setIsDark(savedTheme === 'dark');

    // Apply dark mode by default
    const root = document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []); // Only runs once on mount

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    const root = document.documentElement;
    if (newTheme) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative z-[10000] p-3 text-gray-400 hover:text-gray-300 transition-colors duration-200 pointer-events-auto bg-transparent"
      aria-label="Toggle theme"
      style={{ 
        pointerEvents: 'auto',
        isolation: 'isolate',
        position: 'relative'
      }}
    >
      {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}

export default ThemeToggle;
