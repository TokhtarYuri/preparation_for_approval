import styles from "./Problems.module.css";
import { PROBLEMS_CONTENT } from "../../../constants/text";
import SliderProblems from "../../ui/sliderProblems";

const Problems = () => {

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h3>
          {PROBLEMS_CONTENT.title_1}
          <span className={styles.coloredText}>
            {PROBLEMS_CONTENT.title_2}
          </span>
          {PROBLEMS_CONTENT.title_3}
        </h3>
      </div>
      <SliderProblems/>
      {/*     <div className={styles.descriptionButton}>
        <p >{MAIN_CONTENT.description}</p>
      </div>
      <div className={styles.container}>
        <img src="/assets/images/radiobutton.svg" alt="Example" className={styles.image} />
        <div className={styles.content1}>
          <p className={styles.description}>
            <span className={styles.coloredText}>{MAIN_CONTENT.paragraph_1}</span>{MAIN_CONTENT.paragraph_11}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <img src="/assets/images/radiobutton.svg" alt="Example" className={styles.image} />
        <div className={styles.content2}>
          <p className={styles.description}>
            <span className={styles.coloredText}>{MAIN_CONTENT.paragraph_2}</span> {MAIN_CONTENT.paragraph_21}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <img src="/assets/images/radiobutton.svg" alt="Example" className={styles.image} />
        <div className={styles.content3}>
          <p className={styles.description}>
            <span className={styles.coloredText}>{MAIN_CONTENT.paragraph_3}</span> {MAIN_CONTENT.paragraph_31}</p>
        </div>
      </div>
      <div className={styles.container}>
        <img src="/assets/images/radiobutton.svg" alt="Example" className={styles.image} />
        <div className={styles.content4}>
          <p className={styles.description}>
            <span className={styles.coloredText}>{MAIN_CONTENT.paragraph_4}</span> {MAIN_CONTENT.paragraph_41}
          </p>
        </div>
      </div>
      <img src="/assets/images/doctor-main.png" alt="doctor" className={styles.mainImage} />
      <Button onClick={handleClick} className={styles.button}>{MAIN_CONTENT.buttonText}</Button>
     */}</div>
  );
};

export default Problems;
