import React, { useState, useEffect } from "react";
import "../Hero/CarouselHero.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const slidesData = [
  {
    img: "https://picsum.photos/id/1018/1200/600",
    title: "Explore the Wilderness",
    text: "Discover breathtaking landscapes.",
    button: "View Gallery",
  },
  {
    img: "https://picsum.photos/id/1060/1200/600",
    title: "Future of Technology",
    text: "Innovations that change the world.",
    button: "Learn More",
  },
  {
    img: "https://picsum.photos/id/1070/1200/600",
    title: "Creative Spaces",
    text: "Find your next inspiration.",
    button: "Get Started",
  },
];

const CarouselHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel-hero-banner">
      {/* === Right Side Social Media Icons === */}
      <div className="social-icons right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>

      {/* === Carousel Slides === */}
      <div className="carousel-images">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href="#" className="cta-button">
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* === Dots Indicators === */}
      <div className="carousel-indicators">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
