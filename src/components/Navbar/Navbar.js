import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';


function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">ReachInbox</h1>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;