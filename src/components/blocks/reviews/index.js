import styles from "./Reviews.module.css";
import { REVIEWS_TITLE } from "../../../constants/text";
import SliderReviews from "../../ui/sliderReviews";

const Reviews = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h3>
          <span className="text-secondary">{REVIEWS_TITLE.title_1}</span>
          <br/>
          {REVIEWS_TITLE.title_2}
        </h3>
      </div>

      <SliderReviews />
    </div>
  );
};

export default Reviews;

