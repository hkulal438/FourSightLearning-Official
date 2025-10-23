import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Corporate.css";
import roomImage from "../../images/BusinessSector.avif";

const fadeInDown = {
  hidden: { opacity: 0, y: 100 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const amenitiesList = [
  "Entrepreneurial development programs.",
  "Customer engagement and marketing workshops.",
  "Financial literacy training.",
  "Business strategy and planning sessions.",
  "Hands-on practical projects.",
  "Mentorship from industry experts.",
  "Continuous business growth guidance.",
];

const amenitiesIcons = [
  { icon: <svg width="48" height="48" fill="#02a75a"><path d="M4 4h16v16H4z"/></svg>, label: "ENTREPRENEURIAL DEVELOPMENT" },
  { icon: <svg width="48" height="48" fill="#02a75a"><circle cx="12" cy="12" r="6"/></svg>, label: "CUSTOMER ENGAGEMENT" },
  { icon: <svg width="48" height="48" fill="#02a75a"><path d="M8 8h8v8H8z"/></svg>, label: "FINANCIAL LITERACY" },
  { icon: <svg width="48" height="48" fill="#02a75a"><path d="M3 3h18v2H3zM3 19h18v2H3zM3 5v14l9-7z"/></svg>, label: "STRATEGY & PLANNING" },
  { icon: <svg width="48" height="48" fill="#02a75a"><circle cx="12" cy="12" r="3"/></svg>, label: "PRACTICAL PROJECTS" },
  { icon: <svg width="48" height="48" fill="#02a75a"><rect x="5" y="5" width="14" height="14"/></svg>, label: "INDUSTRY MENTORSHIP" },
  { icon: <svg width="48" height="48" fill="#02a75a"><path d="M4 4h16v16H4z"/></svg>, label: "CONTINUOUS GROWTH" },
];

const BusinessSector = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <motion.div
      className="room-details-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 className="room-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        BUSINESS SECTOR
      </motion.h1>

      <motion.div className="image-button-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <img src={roomImage} alt="Business Sector" className="room-image" />
      </motion.div>

      <motion.div className="button-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <button className="book-now-btn">EXPLORE PROGRAMS</button>
      </motion.div>

      <motion.div className="room-description" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <p>
          Our Business Sector programs empower entrepreneurs, enhance customer engagement, and develop financial literacy. We deliver hands-on projects, mentorship, and strategies to drive measurable business growth.
        </p>
        <ul className="room-amenities-list">
          {amenitiesList.map((item, idx) => (
            <motion.li key={idx} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
              <span className="checkmark">&#10004;</span> <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div className="amenities-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <h2 className="amenities-title">Why Choose Us</h2>
        <div className="amenities-icons-grid">
          {amenitiesIcons.map(({ icon, label }, idx) => (
            <motion.div key={idx} className="amenity-icon-item" custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
              <div className="icon">{icon}</div>
              <div className="label">{label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BusinessSector;
