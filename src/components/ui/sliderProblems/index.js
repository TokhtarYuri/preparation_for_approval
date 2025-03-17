import React, { useEffect, useRef, useState } from "react";
import styles from "./SliderProblems.module.css";
import { PROBLEMS_CONTENT } from "../../../constants/text";


const question_1 =
    <div className={styles.itemQuestion}>
        <img src="/assets/images/problems.png" alt="problems" className={styles.imageProblem} />
        <h4>{PROBLEMS_CONTENT.title_problem_1}</h4>
        <p>{PROBLEMS_CONTENT.problem_1}</p>
    </div>

const question_2 =
    <div className={styles.itemQuestion}>
        <img src="/assets/images/problems.png" alt="problems" className={styles.imageProblem} />
        <h4>{PROBLEMS_CONTENT.title_problem_2}</h4>
        <p>{PROBLEMS_CONTENT.problem_2}</p>
    </div>

const question_3 =
    <div className={styles.itemQuestion}>
        <img src="/assets/images/problems.png" alt="problems" className={styles.imageProblem} />
        <h4>{PROBLEMS_CONTENT.title_problem_3}</h4>
        <p>{PROBLEMS_CONTENT.problem_3}</p>
    </div>

const answer_1 =
    <div className={styles.itemAnswer}>
        <img src="/assets/images/answer.png" alt="problems" className={styles.imageAnswer} />
        <h4>{PROBLEMS_CONTENT.title_solution}</h4>
        <p>{PROBLEMS_CONTENT.solution_1}</p>
    </div>

const answer_2 =
    <div className={styles.itemAnswer}>
        <img src="/assets/images/answer.png" alt="problems" className={styles.imageAnswer} />
        <h4>{PROBLEMS_CONTENT.title_solution}</h4>
        <p>{PROBLEMS_CONTENT.solution_2}</p>
    </div>

const answer_3 =
    <div className={styles.itemAnswer}>
        <img src="/assets/images/answer.png" alt="problems" className={styles.imageAnswer} />
        <h4>{PROBLEMS_CONTENT.title_solution}</h4>
        <p>{PROBLEMS_CONTENT.solution_3}</p>
    </div>

const data = [
    { question: question_1, answer: answer_1 },
    { question: question_2, answer: answer_2 },
    { question: question_3, answer: answer_3 }
];

const SliderProblems = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
                setTransitioning(false);
            }, 300);
        }
    };

    const prevSlide = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
                setTransitioning(false);
            }, 300);
        }
    };

    const goToSlide = (index) => {
        if (!transitioning) {
            setCurrentIndex(index);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextSlide();
        } else if (touchEndX.current - touchStartX.current > 50) {
            prevSlide();
        }
    };

/*     useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 1000);
    
        return () => clearInterval(interval);
    }, [data.length]); */

    return (
        <div className={styles.sliderContainer}>
            <div
                className={`${styles.card} ${transitioning ? styles.transition : ""}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {data.map((item, index) => (
                    <div key={index} className={styles.slide}>
                        <div className={styles.question}>{item.question}</div>
                        <div className={styles.answer}>{item.answer}</div>
                    </div>
                ))}
            </div>
            <div className={styles.controls}>
                <div className={styles.indicators}>
                    {data.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${currentIndex === index ? styles.active : ""}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default SliderProblems;