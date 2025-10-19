import React from "react";
import "../About/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About Company</span>
                <h2>
                  Where insight sparks action, <br />Together, we grow.
                </h2>
              </div>
              <div className="text">
                At FourSight Learning, we envision a world where learning is not
                confined to classrooms, but woven into the fabric of everyday
                progress. We believe that true transformation begins when
                knowledge evolves into purposeful action — when individuals rise
                beyond potential and organizations thrive through empowerment.
                Headquartered in Mangalore, FourSight Learning stands as a
                catalyst for growth, blending wisdom, innovation, and human
                connection to drive lasting impact. Our philosophy is simple yet
                profound: when people grow, organizations flourish; when
                capability meets clarity, excellence follows. We bring together
                industry insights, experiential learning design, and a deep
                understanding of human behavior to craft programs that don’t
                just educate — they elevate. Every session we deliver, every
                skill we build, and every mindset we shape is guided by one core
                belief: progress is not an event; it’s a continuous journey of
                discovery and self-mastery. At FourSight Learning, we are not
                just developing competencies — we are shaping thinkers,
                inspiring leaders, and building communities of purpose-driven
                professionals who create value that endures. In everything we
                do, we strive to turn learning into legacy.
              </div>
              <ul className="list-style-one">
                <li>We turn learning into real-world impact.</li>
                <li>We bridge knowledge with action.</li>
                <li>We inspire growth that lasts.</li>
              </ul>
              <div className="btn-box">
                <a href="/contact" className="theme-btn btn-style-one">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image-1">
                <img
                  src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                  alt="About us"
                />
              </figure>
              <figure className="image-2">
                <img
                  src="https://i.ibb.co/JvN0NVB/image-2-about.jpg"
                  alt="Our team"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
