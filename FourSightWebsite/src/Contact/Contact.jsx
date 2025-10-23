import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
              </p>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="FirstName"
                  placeholder="Please enter first name..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Please enter email..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="PhoneNumber"
                  placeholder="Please enter phone number..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">What do you have in mind?</label>
                <textarea
                  id="message"
                  name="Message"
                  placeholder="Please enter your query..."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>

        {/* Map and Social Section */}
        <div className="contact-info">
          <div className="info-content">
            <h3 className="info-title">Reach us at</h3>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
            </p>

            <div className="social-links">
              <a href="#">
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                  alt="Google"
                />
              </a>
              <a href="#">
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  alt="Instagram"
                />
              </a>
            </div>

            <div className="map-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
