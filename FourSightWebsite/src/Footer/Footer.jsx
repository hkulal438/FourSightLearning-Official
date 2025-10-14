import React from "react";
import "../Footer/Footer.css";
import BgImage from "../images/BgImage.avif";
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
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="footer-content">
        <h3 className="footer-title">
          Hotel Adithya Nest, Near Kumaradhara Snana Ghatta, Kukke Subrahmanya,
          Kadaba Taluk, D.K- Karnataka 574238
        </h3>

        <div className="contact-row">
          <div className="contact-item">
            <FaPhoneAlt />
            <span> +91 9448123236</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <span> +91 8123663236</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span> info@adithyanest.com</span>
          </div>
          <div className="contact-item">
            <FaWhatsapp />
            <span> +91 9448123236</span>
          </div>
        </div>

        <div className="social-row">
          <p>Get In Touch</p>
          <div className="social-icons">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaX />
            </span>
            <span>
              <FaTripadvisor />
            </span>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-links">
          <span>Home</span>
          <span>Room Type</span>
          <span>Amenities</span>
          <span>Rules and Policies</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className="footer-terms">
          <span>Terms And Conditions</span>
          <span>Privacy Policy</span>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © 2025 <span>FoursightLearning</span>. All Rights Reserved |
            <span> Weltraum Software Private Limited</span>, by
            <span className="sk-link"> SK</span>️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
