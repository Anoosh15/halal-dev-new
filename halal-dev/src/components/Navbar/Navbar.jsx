import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="src/assets/logo 1 (1).png" alt="Halal Devco Logo" />
        </div>
        <div className="header-right">
          <span className="language-switcher">العربية</span>
          <button className="button-consultant">Book a Consultant</button>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="menu-dropdown">
          <a href="#technical">Technical</a>
          <a href="#advisory">Advisory</a>
          <a href="#investment">Investment</a>
          <a href="#about">About Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
