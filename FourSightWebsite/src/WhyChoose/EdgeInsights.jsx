import React from "react";
import "../WhyChoose/EdgeInsights.css";
import { FaLightbulb, FaChartLine } from "react-icons/fa";

const EdgeInsights = () => {
  return (
    <section className="fs-ei-section">
      <div className="fs-ei-header">
        <h2>Our Edge & Key Insights</h2>
        <p>
          Discover what makes Foursight Learning stand apart — our innovation,
          expertise, and forward-thinking approach that drives meaningful impact.
        </p>
      </div>

      <div className="fs-ei-cards">
        <div className="fs-ei-card">
          <div className="fs-ei-icon">
            <FaLightbulb />
          </div>
          <h3 className="fs-ei-title">Our Edge</h3>
          <p className="fs-ei-text">
            We bring together knowledge, experience, and innovation to ensure every
            program is impactful. Our team leverages hands-on strategies that empower
            sustainable, real-world growth.
          </p>
        </div>

        <div className="fs-ei-card">
          <div className="fs-ei-icon">
            <FaChartLine />
          </div>
          <h3 className="fs-ei-title">Key Insights</h3>
          <ul className="fs-ei-list">
            <li>Blending global trends with local context</li>
            <li>Hands-on, interactive learning experiences</li>
            <li>Focus on both skills and mindset</li>
            <li>Partnerships that enable long-term success</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EdgeInsights;
