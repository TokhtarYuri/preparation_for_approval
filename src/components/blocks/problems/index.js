import styles from "./Problems.module.css";
import { PROBLEMS_CONTENT } from "../../../constants/text";
import SliderProblems from "../../ui/sliderProblems";

const Problems = () => {

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h3>
          {PROBLEMS_CONTENT.title_1}
          <span className={"text-secondary"}>
            {PROBLEMS_CONTENT.title_2}
          </span>
          {PROBLEMS_CONTENT.title_3}
        </h3>
      </div>
      <SliderProblems />
    </div>
  );
};

export default Problems;
