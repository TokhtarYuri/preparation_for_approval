import styles from "./RegistrationForm.module.css";
import { REGISTRATION_CONTENT } from "../../../constants/text";

const RegistrationForm = () => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.background}>
        <div className={styles.container}>
          <h2 className={styles.title}>{REGISTRATION_CONTENT.title}</h2>
          <form className={styles.form}>
            <input type="text" placeholder={REGISTRATION_CONTENT.phone} className={styles.input} />
            <input type="text" placeholder={REGISTRATION_CONTENT.name} className={styles.input} />
            <input type="email" placeholder={REGISTRATION_CONTENT.mail} className={styles.input} />
            <button type="submit" className={styles.button}>{REGISTRATION_CONTENT.button}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
