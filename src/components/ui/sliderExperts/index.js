'use client';

import React, { useEffect, useRef, useState } from "react";
import styles from "./SliderExperts.module.css";
import { EXPERTS_CONTENT } from "../../../constants/text";
import LogoSRC from "../../../images/logo.svg"
import Avatar1SRC from "../../../images/avatar-1.png"
import Avatar2SRC from "../../../images/avatar-2.png"
import Avatar3SRC from "../../../images/avatar-3.png"
import ArrowSliderSRC from "../../../images/arrow-slider.svg"
import { getImageSrc } from "../../../utils/imageHelper";

const expert_1 =
    <div className={styles.itemExpert}>
        <img src={getImageSrc(LogoSRC)} alt="Logo" className={styles.logo} />
        <img src={getImageSrc(Avatar1SRC)} alt="problems" className={styles.imageAvatar} />
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
        <img src={getImageSrc(LogoSRC)} alt="Logo" className={styles.logo} />
        <img src={getImageSrc(Avatar2SRC)} alt="problems" className={styles.imageAvatar} />
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

const expert_3 =
    <div className={styles.itemExpert}>
        <img src={getImageSrc(LogoSRC)} alt="Logo" className={styles.logo} />
        <img src={getImageSrc(Avatar3SRC)} alt="problems" className={styles.imageAvatar} />
        <h4 className={styles.nameExpert}>{EXPERTS_CONTENT.name_3}</h4>
        <p>{EXPERTS_CONTENT.job_3}</p>
        <div className={styles.line}></div>
        <div className={styles.listCV}>
            {EXPERTS_CONTENT.cv_3.map((item, index) => (
                <div key={index} className={styles.cv}>
                    <div className={styles.marker}></div>
                    <p key={index}>{item}</p>
                </div>
            ))}
        </div>
        <div className={styles.message}>
            <p>{EXPERTS_CONTENT.message_3}</p>
            <p>{EXPERTS_CONTENT.message_33}</p>
        </div>
    </div>


const data = [
    { expert: expert_1 },
    { expert: expert_2 },
    { expert: expert_3 }
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [data.length]);

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
                <img src={getImageSrc(ArrowSliderSRC)} alt="" onClick={prevSlide} />

            </div>
        </div>
    );
};


export default SliderExperts;