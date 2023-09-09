
import { CiCloudMoon, CiSun } from "react-icons/ci";
import React, { useEffect, useState } from 'react';

const SwitchTheme = () => {

  const isBrowser = typeof window !== 'undefined';
  const [theme, setTheme] = useState('theme');

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
    <button className="btn_icons" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <CiCloudMoon className="w-4 h-4" />
      ) : (
        <CiSun className="w-4 h-4" />
      )}
    </button>
  );
};

export default SwitchTheme;
