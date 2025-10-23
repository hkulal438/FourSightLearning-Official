import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import bgImage from "../images/BgImage.avif";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTripadvisor,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="footer-content">
        {/* Address */}
        <h3 className="footer-title">
          Foursight Learning, Near Kumaradhara Snana Ghatta, Kukke Subrahmanya, 
          Kadaba Taluk, D.K- Karnataka 574238
        </h3>

        {/* Contact Info */}
        <div className="contact-row">
          <div className="contact-item">
            <FaWhatsapp />
            <a
              href="https://wa.me/919448123236?text=Hi%2C%20Greetings%20from%20FoursightLearning"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9448123236
            </a>
          </div>
          <div className="contact-item">
            <FaWhatsapp />
            <a
              href="https://wa.me/918123663236?text=Hi%2C%20Greetings%20from%20FoursightLearning"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 8123663236
            </a>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:info@foursightlearning.com">
              info@foursightlearning.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-row">
          <p>Get In Touch</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/foursightlearning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/foursightlearning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaX />
            </a>
            <a
              href="https://www.youtube.com/foursightlearning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/book-appointment">Book an Appointment</Link>
        </div>

        <div className="footer-terms">
          <Link to="/terms-and-conditions">Terms And Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025 <span>foursightlearning.com</span>. All Rights Reserved |
            <a
              href="https://weltraumsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weltraum Software Private Limited
            </a>, by
            <a
              href="https://shara7h.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sk-link"
            >
              SK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
