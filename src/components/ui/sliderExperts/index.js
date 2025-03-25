import React, { useEffect, useRef, useState } from "react";
import styles from "./SliderExperts.module.css";
import { EXPERTS_CONTENT } from "../../../constants/text";

const expert_1 =
    <div className={styles.itemExpert}>
        <img src="/assets/images/logo.svg" alt="Logo" className={styles.logo} />
        <img src="/assets/images/avatar-1.png" alt="problems" className={styles.imageAvatar} />
        <h4 className={styles.nameExpert}>{EXPERTS_CONTENT.name_1}</h4>
        <p>{EXPERTS_CONTENT.job_1}</p>
        <div className={styles.line}></div>
        <div className={styles.listCV}>
            {EXPERTS_CONTENT.cv_1.map((item, index) => (
                <div key={index} className={styles.cv}>
                    <div className={styles.marker}></div>
                    <p key={index}>{item}</p>
                </div>
            ))}
        </div>
        <div className={styles.message}>
            <p>{EXPERTS_CONTENT.message_1}</p>
            <p>{EXPERTS_CONTENT.message_11}</p>
        </div>
    </div>

const expert_2 =
    <div className={styles.itemExpert}>
        <img src="/assets/images/logo.svg" alt="Logo" className={styles.logo} />
        <img src="/assets/images/avatar-1.png" alt="problems" className={styles.imageAvatar} />
        <h4 className={styles.nameExpert}>{EXPERTS_CONTENT.name_2}</h4>
        <p>{EXPERTS_CONTENT.job_2}</p>
        <div className={styles.line}></div>
        <div className={styles.listCV}>
            {EXPERTS_CONTENT.cv_2.map((item, index) => (
                <div key={index} className={styles.cv}>
                    <div className={styles.marker}></div>
                    <p key={index}>{item}</p>
                </div>
            ))}
        </div>
        <div className={styles.message}>
            <p>{EXPERTS_CONTENT.message_2}</p>
            <p>{EXPERTS_CONTENT.message_22}</p>
        </div>
    </div>


const data = [
    { expert: expert_1 },
    { expert: expert_2 }
];

const SliderExperts = () => {
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

/*          useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 10000);
        
            return () => clearInterval(interval);
        }, [data.length]);  */

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
                        {item.expert}
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
            
                <div className={styles.arrow} onClick={prevSlide}></div>
                <img src="/assets/images/arrow-slider.svg" alt="Logo" onClick={prevSlide} />

            </div>
        </div>
    );
};


export default SliderExperts;