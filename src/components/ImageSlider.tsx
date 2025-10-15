"use client";

import { useState, useEffect } from "react";
import "./ImageSlider.css";

interface Slide {
  id: number;
  title: string;
  className: string;
}

const slides: Slide[] = [
  { id: 1, title: "AI Innovation", className: "slide-one" },
  { id: 2, title: "Machine Learning", className: "slide-two" },
  { id: 3, title: "Data Analytics", className: "slide-three" },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <div className="slider-container">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          ‹
        </button>
        <div className="slider-content">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <div className={`slide-background ${slide.className}`}>
                <h3 className="slide-title">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn next-btn" onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
