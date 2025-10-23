import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../images/4SightLearningLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll helper: navigates to "/" first if not on home, then scrolls to section
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // Navigate to home and pass scrollToId in state
      navigate('/', { state: { scrollToId: id } });
    } else {
      // Smooth scroll if already on home page
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <RouterLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Foursight Logo" />
          </RouterLink>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button className="nav-link" onClick={() => { scrollToSection('hero-section'); closeMenu(); }}>
                Home
              </button>
            </li>

            {/* About Dropdown */}
            <li
              className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={() => setActiveDropdown('about')} className="nav-link">
                About
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button onClick={() => scrollToSection('team-section')}>
                    Meet the Team
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about-company-section')}>
                    About Company
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('why-foursight-section')}>
                    Why Foursight
                  </button>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li
              className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={() => setActiveDropdown('services')} className="nav-link">
                Services
              </button>
              <ul className="dropdown-menu">
                <li>
                  <RouterLink to="/education" onClick={closeMenu}>
                    Education Sector
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/business" onClick={closeMenu}>
                    Business Sector
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/corporate" onClick={closeMenu}>
                    Corporate Sector
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/government" onClick={closeMenu}>
                    Government & Public Sector
                  </RouterLink>
                </li>
              </ul>
            </li>

            <li>
              <button className="nav-link" onClick={() => { scrollToSection('gallery-section'); closeMenu(); }}>
                Gallery
              </button>
            </li>

            <li>
              <button className="nav-link" onClick={() => { scrollToSection('contact-section'); closeMenu(); }}>
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <RouterLink to="/appointment" className="appointment-btn" onClick={closeMenu}>
            Book an Appointment
          </RouterLink>

          {/* Hamburger Menu */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
