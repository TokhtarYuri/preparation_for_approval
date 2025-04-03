import styles from "./Main.module.css";
import { MAIN_CONTENT } from "../../../constants/text";
import Button from "../../ui/button";
import ExampleSRC from "../../../images/radiobutton.svg";
import DoctorSRC from "../../../images/doctor-main.png";
import BackgroundImgSRC from "../../../images/background-main-footer.svg"
const Main = () => {

  const handleClick = () => {
    console.log("dsfsdfgdsg");
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{MAIN_CONTENT.title}</h1>
      </div>
      <div className={styles.descriptionButton}>
        <p >{MAIN_CONTENT.description}</p>
      </div>
      <div className={styles.container}>
        <img src={ExampleSRC} alt="Example" className={styles.image} />
        <div className={styles.content1}>
          <p className={styles.description}>
            <span className={"text-secondary"}>{MAIN_CONTENT.paragraph_1}</span>{MAIN_CONTENT.paragraph_11}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <img src={ExampleSRC} alt="Example" className={styles.image} />
        <div className={styles.content2}>
          <p className={styles.description}>
            <span className={"text-secondary"}>{MAIN_CONTENT.paragraph_2}</span> {MAIN_CONTENT.paragraph_21}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <img src={ExampleSRC} alt="Example" className={styles.image} />
        <div className={styles.content3}>
          <p className={styles.description}>
            <span className={"text-secondary"}>{MAIN_CONTENT.paragraph_3}</span> {MAIN_CONTENT.paragraph_31}</p>
        </div>
      </div>
      <div className={styles.container}>
        <img src={ExampleSRC} alt="Example" className={styles.image} />
        <div className={styles.content4}>
          <p className={styles.description}>
            <span className={"text-secondary"}>{MAIN_CONTENT.paragraph_4}</span> {MAIN_CONTENT.paragraph_41}
          </p>
        </div>
      </div>
      <img src={DoctorSRC} alt="doctor" className={styles.mainImage} />
      <div className={styles.button}>
        <Button onClick={handleClick}>{MAIN_CONTENT.buttonText}</Button>
      </div>
      <img src={BackgroundImgSRC} alt="" className={styles.backgroundImgSRC} />  
      <div className={styles.itemImageBackground}></div>
       <div className={styles.ellipse1}></div>
      <div className={styles.ellipse2}></div>
      <div className={styles.ellipse3}></div>
    </main>
  );
};

export default Main;
