import styles from "./PracticalApproach.module.css";
import { PRACTICAL_APPROACH_CONTENT } from "../../../constants/text";
import { getImageSrc } from "../../../utils/imageHelper";

const PracticalApproach = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>
          <span className="text-secondary">{PRACTICAL_APPROACH_CONTENT.title_1}</span>
          <br />
          {PRACTICAL_APPROACH_CONTENT.title_2}
        </h2>

        <div className={styles.practical}>
          {PRACTICAL_APPROACH_CONTENT.list.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.iconWrapper}>
                <img src={getImageSrc(item.image)} alt="icon" className={styles.image} />
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.itemTitle}><span className="text-secondary">{item.itemTitle}</span></p>
                <p className={styles.item}>{item.item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticalApproach;
