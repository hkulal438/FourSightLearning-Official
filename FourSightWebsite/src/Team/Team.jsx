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
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, amet. Dolorum, a quidem sapiente at harum numquam vero consectetur distinctio natus alias.",
    },
    {
      name: "Deepak Raj",
      title: "CTO",
      img: Deepak,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, amet. Dolorum, a quidem sapiente at harum numquam vero consectetur distinctio natus alias.",
    },
    {
      name: "Deeraj B",
      title: "Creative Head",
      img: Deeraj,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, amet. Dolorum, a quidem sapiente at harum numquam vero consectetur distinctio natus alias.",
    },
    {
      name: "Madhusudan",
      title: "Marketing Lead",
      img: Madhu,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, amet. Dolorum, a quidem sapiente at harum numquam vero consectetur distinctio natus alias.",
    },
  ];

  return (
    <section className="team-section__container">
      {/* New Heading */}
      <div className="team-section__header">
        <h2 className="team-section__main-heading">Meet The Team</h2>
        <div className="team-section__underline"></div>
      </div>

      <h1 className="team-section__title">Our Team</h1>

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
            </div>
            <div className="team-section__info">
              <h4>{member.name}</h4>
              <h5>{member.title}</h5>
              <p className="team-section__desc">{member.desc}</p>
              <div className="team-section__social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGooglePlusG /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="team-section__footer">
        <p>© 2025 Foursight Learning — All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default Team;
