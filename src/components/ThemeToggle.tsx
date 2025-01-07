import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="fixed right-4 top-20 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-gold-600" />
      ) : (
        <Moon className="w-6 h-6 text-gold-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;