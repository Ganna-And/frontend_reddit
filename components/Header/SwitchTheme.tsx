
import { FaMoon, FaSun } from "react-icons/fa";
import React, { useEffect, useState } from 'react';

const SwitchTheme = () => {

  const isBrowser = typeof window !== 'undefined';
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (isBrowser) {
      const storedTheme = localStorage.getItem('theme');
      setTheme(storedTheme || 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (isBrowser) {
      localStorage.setItem('theme', newTheme);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      const body = document.body;
      body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <button className="ml-3 btn btn-md btn-circle btn-outline btn-primary border-accent border-2" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <FaMoon className="w-4 h-4" />
      ) : (
        <FaSun className="w-4 h-4" />
      )}
    </button>
  );
};

export default SwitchTheme;
