import styles from "./Main.module.css";
import { MAIN_CONTENT } from "../../../constants/text";
import Button from "../../ui/button";
import ExampleSRC from "../../../images/radiobutton.svg";
import DoctorSRC from "../../../images/doctor-main.png";
import BackgroundImgSRC from "../../../images/background-main-footer.svg"

const Main = () => {
  
    const scrollToRegistration = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{MAIN_CONTENT.title}</h1>
      </div>

      <div className={styles.descriptionButton}>
        <p>{MAIN_CONTENT.description}</p>
      </div>

      {[1,2,3,4].map(i => (
        <div key={i} className={styles.container}>
          <img src={ExampleSRC} alt="Example" className={styles.image} />
          <div className={styles[`content${i}`]}>
            <p>
              <span className="text-secondary">{MAIN_CONTENT[`paragraph_${i}`]}</span>
              {MAIN_CONTENT[`paragraph_${i}1`]}
            </p>
          </div>
        </div>
      ))}

      <div className={styles.button}>
        <Button onClick={scrollToRegistration}>{MAIN_CONTENT.buttonText}</Button>
      </div>

      <img src={DoctorSRC} alt="doctor" className={styles.mainImage} />
      <img src={BackgroundImgSRC} alt="" className={styles.backgroundImgSRC} />  
       <div className={styles.itemImageBackground}></div> 
       
    </main>
  );
};

export default Main;
