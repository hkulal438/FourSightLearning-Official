import React, { useState, useEffect } from "react";
import "../Hero/CarouselHero.css";

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

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel-hero-banner">
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

      <button className="nav-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        &#10095;
      </button>

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
