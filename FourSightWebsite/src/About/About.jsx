import React from "react";
import "./About.css";
import useScrollAnimation from "../useScrollAnimation";

const About = () => {
  useScrollAnimation(); // Activate scroll animations

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 animate-fade-right">
            <div className="inner-column">
              <div className="sec-title animate-fade-up">
                <span className="title">About Company</span>
                <h2>
                  Where insight sparks action,
                  <br /> Together, we grow.
                </h2>
              </div>

              <div className="text animate-fade-up" style={{ animationDelay: "0.2s" }}>
                At FourSight Learning, we envision a world where learning is not
                confined to classrooms, but woven into everyday progress. True
                transformation begins when knowledge evolves into purposeful action.
              </div>

              <ul className="list-style-one animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <li>We turn learning into real-world impact.</li>
                <li>We bridge knowledge with action.</li>
                <li>We inspire growth that lasts.</li>
              </ul>

              <div className="btn-box animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <a href="/contact" className="theme-btn btn-style-one">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 animate-fade-left">
            <div className="inner-column">
              <figure className="image-1 animate-zoom-in" style={{ animationDelay: "0.2s" }}>
                <img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="About us" />
              </figure>
              <figure className="image-2 animate-zoom-in" style={{ animationDelay: "0.4s" }}>
                <img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt="Our team" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
