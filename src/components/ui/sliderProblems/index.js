'use client';

import React, { useEffect, useRef, useState } from "react";
import styles from "./SliderProblems.module.css";
import { PROBLEMS_CONTENT } from "../../../constants/text";
import ProblemsSRC from "../../../images/problems.png";
import AnswerSRC from "../../../images/answer.png";
import { getImageSrc } from "../../../utils/imageHelper";

const question_1 = (
  <div className={styles.itemQuestion}>
    <img src={getImageSrc(ProblemsSRC)} alt="problems" className={styles.imageProblem} />
    <h4>{PROBLEMS_CONTENT.title_problem_1}</h4>
    <p>{PROBLEMS_CONTENT.problem_1}</p>
  </div>
);

const question_2 = (
  <div className={styles.itemQuestion}>
    <img src={getImageSrc(ProblemsSRC)} alt="problems" className={styles.imageProblem} />
    <h4>{PROBLEMS_CONTENT.title_problem_2}</h4>
    <p>{PROBLEMS_CONTENT.problem_2}</p>
  </div>
);

const question_3 = (
  <div className={styles.itemQuestion}>
    <img src={getImageSrc(ProblemsSRC)} alt="problems" className={styles.imageProblem} />
    <h4>{PROBLEMS_CONTENT.title_problem_3}</h4>
    <p>{PROBLEMS_CONTENT.problem_3}</p>
  </div>
);

const answer_1 = (
  <div className={styles.itemAnswer}>
    <img src={getImageSrc(AnswerSRC)} alt="answer" className={styles.imageAnswer} />
    <h4>{PROBLEMS_CONTENT.title_solution}</h4>
    <p>{PROBLEMS_CONTENT.solution_1}</p>
  </div>
);

const answer_2 = (
  <div className={styles.itemAnswer}>
    <img src={getImageSrc(AnswerSRC)} alt="answer" className={styles.imageAnswer} />
    <h4>{PROBLEMS_CONTENT.title_solution}</h4>
    <p>{PROBLEMS_CONTENT.solution_2}</p>
  </div>
);

const answer_3 = (
  <div className={styles.itemAnswer}>
    <img src={getImageSrc(AnswerSRC)} alt="answer" className={styles.imageAnswer} />
    <h4>{PROBLEMS_CONTENT.title_solution}</h4>
    <p>{PROBLEMS_CONTENT.solution_3}</p>
  </div>
);

const data = [
  { question: question_1, answer: answer_1 },
  { question: question_2, answer: answer_2 },
  { question: question_3, answer: answer_3 },
];

const SliderProblems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dragX, setDragX] = useState(0);

  const startX = useRef(0);
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const prevIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;
  const slides = [data[prevIndex], data[currentIndex], data[nextIndex]];

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const moveX = e.touches[0].clientX - startX.current;
    setDragX(moveX);
  };

  const handleTouchEnd = () => {
    if (dragX < -50) nextSlide();
    else if (dragX > 50) prevSlide();
    else resetPosition();
  };

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setDragX(-containerRef.current.offsetWidth);
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % data.length);
      setAnimating(false);
      setDragX(0);
    }, 300);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setDragX(containerRef.current.offsetWidth);
    setTimeout(() => {
      setCurrentIndex((i) => (i - 1 + data.length) % data.length);
      setAnimating(false);
      setDragX(0);
    }, 300);
  };

  const resetPosition = () => {
    setDragX(0);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer} ref={containerRef}>
      <div
        className={styles.card}
        ref={cardRef}
        style={{
          transform: `translateX(calc(-100% + ${dragX}px))`,
          transition: animating ? "transform 0.3s ease" : "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((item, i) => (
          <div key={i} className={styles.slide}>
            <div className={styles.question}>{item.question}</div>
            <div className={styles.answer}>{item.answer}</div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.indicators}>
          {data.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${
                i === currentIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderProblems;
