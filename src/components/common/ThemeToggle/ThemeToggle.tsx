import React from 'react';
import MoonIcon from '../../../assets/moon.svg';
import SunIcon from '../../../assets/sun.svg';
import { useTheme } from '../../../context/ThemeContext';
import './ThemeToggle.scss';

interface ThemeToggleProps {
  onToggle?: (theme: string) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => {
    toggleTheme();
    onToggle?.(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label className="theme-toggle">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleChange}
        aria-label="Toggle Theme"
      />
      <span className="slider">
        {theme === 'dark' ? (
          <img src={MoonIcon} className="icon" alt="Moon Icon" />
        ) : (
          <img src={SunIcon} className="icon" alt="Sun Icon" />
        )}
      </span>
    </label>
  );
};

export default ThemeToggle;
