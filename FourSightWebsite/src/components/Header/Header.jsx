import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/4SightLearningLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Foursight Logo" />
          </a>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="/" className="nav-link">Home</a></li>

            <li
              className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={() => handleDropdown('about')} className="nav-link">About</button>
              <ul className="dropdown-menu">
                <li><a href="/team">Meet the Team</a></li>
                <li><a href="/about-company">About Company</a></li>
                <li><a href="/why-foursight">Why Foursight</a></li>
              </ul>
            </li>

            <li
              className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={() => handleDropdown('services')} className="nav-link">Services</button>
              <ul className="dropdown-menu">
                <li><a href="/education">Education Sector</a></li>
                <li><a href="/business">Business Sector</a></li>
                <li><a href="/corporate">Corporate Sector</a></li>
                <li><a href="/government">Government & Public Sector</a></li>
              </ul>
            </li>

            <li><a href="/gallery" className="nav-link">Gallery</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <a href="/appointment" className="appointment-btn">
            Book an Appointment
          </a>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
