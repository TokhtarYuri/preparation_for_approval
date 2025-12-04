import styles from "./Experts.module.css";
import { EXPERTS_CONTENT } from "../../../constants/text";
import SliderExperts from "../../ui/sliderExperts";

const Experts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3>{EXPERTS_CONTENT.title}</h3>
      </div>

      <div className={styles.sliderWrapper}>
        <SliderExperts />
      </div>
    </section>
  );
};

export default Experts;
