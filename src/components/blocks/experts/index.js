import styles from "./Experts.module.css";
import { EXPERTS_CONTENT } from "../../../constants/text";
import SliderExperts from "../../ui/sliderExperts";

const Experts = () => {

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h3>
          {EXPERTS_CONTENT.title}
        </h3>
      </div>
      <SliderExperts />

      <div className={styles.itemImageBackgroundTop}></div>
      <div className={styles.itemImageBackgroundBottom}></div>
    </div>
  );
};

export default Experts;
