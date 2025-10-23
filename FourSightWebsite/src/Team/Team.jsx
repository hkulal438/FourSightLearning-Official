import React from "react";
import "./Team.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube } from "react-icons/fa";

import Arun from "../images/Arun Peter.jpg";
import Deepak from "../images/Deepak Raj.jpg";
import Deeraj from "../images/Deeraj B.jpg";
import Madhu from "../images/Madhusudan.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Arun Peter",
      title: "Founder & CEO",
      img: Arun,
      desc: "Arun is the visionary behind Foursight Learning, driving innovation and strategy across all domains.",
    },
    {
      name: "Deepak Raj",
      title: "CTO",
      img: Deepak,
      desc: "Deepak leads the technical initiatives and ensures our systems stay scalable and secure.",
    },
    {
      name: "Deeraj B",
      title: "Creative Head",
      img: Deeraj,
      desc: "Deeraj crafts our visual identity and user experience with creativity and precision.",
    },
    {
      name: "Madhusudan",
      title: "Marketing Lead",
      img: Madhu,
      desc: "Madhu drives growth strategies and brand awareness through innovative campaigns.",
    },
  ];

  return (
    <section className="team-section__container">
      <div className="team-section__header">
        <h2 className="team-section__main-heading">Meet The Team</h2>
        <div className="team-section__underline"></div>
      </div>

      <div className="team-section__members">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-section__member-card ${
              index % 2 === 0 ? "team-section__card--up" : "team-section__card--down"
            }`}
          >
            <div className="team-section__image">
              <img src={member.img} alt={member.name} />
              <div className="team-section__overlay">
                <h4>{member.name}</h4>
                <h5>{member.title}</h5>
                <p>{member.desc}</p>
                <div className="team-section__social">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaGooglePlusG /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <footer className="team-section__footer">
        <p>© 2025 Foursight Learning — All Rights Reserved</p>
      </footer> */}
    </section>
  );
};

export default Team;
