import React, { useState, useRef, useEffect } from "react";
import "../Team/Team.css";

// ✅ Import team images
import Arun from "../images/Arun Peter.jpg";
import Deepak from "../images/Deepak Raj.jpg";
import Deeraj from "../images/Deeraj B.jpg";
import Madhu from "../images/Madhusudan.jpg";

const teamMembers = [
  {
    name: "Arun Peter",
    title: "Founder & CEO",
    img: Arun,
    desc: `Arun leads Foursight Learning with a vision to transform education and corporate training through innovation and collaboration.`,
  },
  {
    name: "Deepak Raj",
    title: "Director of Operations",
    img: Deepak,
    desc: `Deepak oversees strategic planning and operational excellence, ensuring smooth execution across all company initiatives.`,
  },
  {
    name: "Deeraj B",
    title: "Technology Head",
    img: Deeraj,
    desc: `Deeraj drives the company’s digital transformation and manages all tech-driven educational solutions.`,
  },
  {
    name: "Madhusudan",
    title: "Learning Consultant",
    img: Madhu,
    desc: `Madhusudan brings years of expertise in training, development, and educational consulting to empower learners.`,
  },
];

const Team = () => {
  const [selected, setSelected] = useState(null);
  const infoRef = useRef(null);

  const handleSelect = (index) => {
    const newIndex = selected === index ? null : index;
    setSelected(newIndex);
  };

  useEffect(() => {
    if (selected !== null && infoRef.current) {
      infoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selected]);

  return (
    <div className="team-wrapper">
      <div className="team-title">
        <h1>Meet the Team</h1>
        <p>Click on a photo to learn more</p>
      </div>

      {selected !== null && (
        <div className="team-info" ref={infoRef}>
          <div
            className="team-info-image"
            style={{ backgroundImage: `url(${teamMembers[selected].img})` }}
          ></div>
          <div className="team-info-details">
            <h2>{teamMembers[selected].name}</h2>
            <h3>{teamMembers[selected].title}</h3>
            <p dangerouslySetInnerHTML={{ __html: teamMembers[selected].desc }} />
          </div>
        </div>
      )}

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-card ${selected === index ? "active" : ""}`}
            onClick={() => handleSelect(index)}
          >
            <div className="image-container">
              <img src={member.img} alt={member.name} className="profile-image" />
              <div className="overlay">
                <div className="overlay-text">
                  <strong>{member.name}</strong>
                  <br />
                  {member.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {teamMembers.map((_, index) => (
          <span
            key={index}
            className={`dot ${selected === index ? "active" : ""}`}
            onClick={() => handleSelect(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Team;
