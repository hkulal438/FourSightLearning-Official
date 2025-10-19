import React from "react";
import "../Contact/Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import bgimage from '../images/bgimage1.jpg';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Header */}
      <div className="contact-header">
        <img src={bgimage} alt="Hotel Background" className="contact-bg" />
        <h1 className="contact-header-title">
          Get in Touch with Us <br /> Hotel Adithya Nest
        </h1>
      </div>

      {/* Info + Form */}
      <div className="contact-content">
        <div className="contact-info">
          <p>
            <a href="tel:+919448123236">
              <FaPhoneAlt /> +91 9448123236
            </a>
          </p>
          <p>
            <a href="tel:+919876543210">
              <FaPhoneAlt /> +91 9876543210
            </a>
          </p>
          <p>
            <a href="mailto:info@adithyanest.com">
              <FaEnvelope /> info@adithyanest.com
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/919448123236"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> +91 9448123236
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=Hotel+Adithya+Nest,+Near+Kumaradhara+Snana+Ghatta,+Kukke+Subrahmanya,+Kadaba+Taluk,+D.K-+Karnataka+574238"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt /> Hotel Adithya Nest, Near Kumaradhara Snana
              Ghatta, Kukke Subrahmanya, Kadaba Taluk, D.K- Karnataka 574238
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Connect with Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="contact-map-section">
        <h2 className="contact-map-heading">Find Our Location</h2>
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467.56681237099974!2d75.605339!3d12.674948000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e545099f7063%3A0x477b35e34501bc08!2sHotel%20Adithya%20Nest!5e1!3m2!1sen!2sus!4v1751010260611!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
