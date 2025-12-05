'use client';

import React, { useEffect, useRef, useState } from "react";
import styles from "./SliderReviews.module.css";
import { REVIEWS_CONTENT } from "../../../constants/text";

const SliderReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dragX, setDragX] = useState(0);

  const startX = useRef(0);
  const containerRef = useRef(null);

  const totalSlides = REVIEWS_CONTENT.length;

  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentIndex + 1) % totalSlides;

  const slides = [
    REVIEWS_CONTENT[prevIndex],
    REVIEWS_CONTENT[currentIndex],
    REVIEWS_CONTENT[nextIndex],
  ];

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    setDragX(e.touches[0].clientX - startX.current);
  };

  const handleTouchEnd = () => {
    if (dragX < -50) nextSlide();
    else if (dragX > 50) prevSlide();
    else setDragX(0);
  };

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setDragX(-containerRef.current.offsetWidth);

    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % totalSlides);
      setAnimating(false);
      setDragX(0);
    }, 300);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setDragX(containerRef.current.offsetWidth);

    setTimeout(() => {
      setCurrentIndex((i) => (i - 1 + totalSlides) % totalSlides);
      setAnimating(false);
      setDragX(0);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer} ref={containerRef}>
      <div
        className={styles.card}
        style={{
          transform: `translateX(calc(-100% + ${dragX}px))`,
          transition: animating ? "transform 0.3s ease" : "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((review, i) => (
          <div key={i} className={styles.slide}>
            <div className={styles.reviewCard}>
              <h4>{review.name}</h4>
              <p className={styles.desc}>{review.description}</p>
              <p className={styles.text}>{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.indicators}>
          {REVIEWS_CONTENT.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${i === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderReviews;
