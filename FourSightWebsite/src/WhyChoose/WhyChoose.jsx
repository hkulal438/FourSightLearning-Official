import React from "react";
import "../WhyChoose/WhyChoose.css";
import teamImage from "../images/audience.jpg"; // replace with your actual image

const WhyChoose = () => {
  const points = [
    {
      number: "01",
      title: "Tailor-Made Programs",
      text: "Customized solutions designed to meet your unique organizational needs and learning goals.",
    },
    {
      number: "02",
      title: "Practical Training Methods",
      text: "Hands-on, real-world approaches that ensure immediate application and lasting results.",
    },
    {
      number: "03",
      title: "Experienced Trainers",
      text: "Led by seasoned professionals with years of proven expertise across multiple sectors.",
    },
    {
      number: "04",
      title: "Sustainable Growth Focus",
      text: "We emphasize measurable outcomes and long-term capability building for your teams.",
    },
  ];

  return (
    <section className="whychoose-section">
      <div className="whychoose-container">
        <div className="whychoose-left">
          <h6 className="whychoose-subtitle">You Will Love It</h6>
          <h2 className="whychoose-title">Why 4Sight Learning?</h2>

          <div className="whychoose-points">
            {points.map((point, index) => (
              <div key={index} className="whychoose-item">
                <div className="whychoose-number">{point.number}</div>
                <div className="whychoose-text">
                  <h4>{point.title}</h4>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whychoose-right">
          <div className="whychoose-image-container">
            <img src={teamImage} alt="Why 4Sight Learning" />
            <div className="whychoose-play">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
