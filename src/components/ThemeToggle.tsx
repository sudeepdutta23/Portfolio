"use client";
import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext, TOGGLE_THEME } from './GlobalThemeProvider';

const ThemeToggle = () => {
  const { setTheme, theme } = useContext(ThemeContext); // Corrected usage
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a placeholder if you prefer
  }

  const handleThemeChange = () => {
    const navbar = document.querySelector("nav");
    if(theme === 'light'){
      document.body.classList.add('dark_Theme');
      document.documentElement.setAttribute("theme","dark");
      navbar?.classList.add("darkHeader");
    }else{
      document.body.classList.remove('dark_Theme');
      document.documentElement.setAttribute("theme","light");
      navbar?.classList.remove("darkHeader");
    }
    setTheme({ type: TOGGLE_THEME });
  };

  return (
    <motion.button
      onClick={handleThemeChange}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full shadow-lg z-50
                 border border-border/50 transition-all duration-300
                 hover:bg-background/90 hover:scale-105"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <i className="icon-sun-1 w-8 h-8 fs-10 text-gray-700 text-6xl"></i>
        // <Moon className="w-6 h-6 text-gray-700" />
      ) : (
        <i className="icon-moon-1 w-8 h-8 text-yellow-400 text-6xl"></i>
        // <Sun className="w-6 h-6 text-yellow-400" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
