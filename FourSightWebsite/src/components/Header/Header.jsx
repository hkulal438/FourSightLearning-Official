import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">
          Foursight<span>Learning</span>
        </h2>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>

            {/* ABOUT */}
            <li
              className="dropdown"
              onMouseEnter={() => !isMobile && setOpenDropdown("about")}
              onMouseLeave={() => !isMobile && setOpenDropdown(null)}
            >
              <button
                className="dropdown-toggle"
                onClick={() => isMobile && toggleDropdown("about")}
                aria-expanded={openDropdown === "about"}
              >
                About ▾
              </button>

              <ul className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>
                <li><a href="#">Meet the People</a></li>
                <li><a href="#">Why Foursight</a></li>
                <li><a href="#">About the Company</a></li>
              </ul>
            </li>

            {/* SERVICES */}
            <li
              className="dropdown"
              onMouseEnter={() => !isMobile && setOpenDropdown("services")}
              onMouseLeave={() => !isMobile && setOpenDropdown(null)}
            >
              <button
                className="dropdown-toggle"
                onClick={() => isMobile && toggleDropdown("services")}
                aria-expanded={openDropdown === "services"}
              >
                Services ▾
              </button>

              <ul className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}>
                <li><a href="#">Education Sector</a></li>
                <li><a href="#">Corporate Sector</a></li>
                <li><a href="#">Business Sector</a></li>
                <li><a href="#">Government & Public Sector</a></li>
              </ul>
            </li>

            <li><a href="#">Resources</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact-Us</a></li>
          </ul>

          <a href="#" className="button">Book Appointment</a>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setOpenDropdown(null);
          }}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
