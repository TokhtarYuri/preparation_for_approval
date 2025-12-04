import styles from "./Structure.module.css";
import { STRUCTURE_CONTENT } from "../../../constants/text";
import PlusSRC from "../../../images/plus.svg";

const Structure = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>{STRUCTURE_CONTENT.title}</h2>

        <div className={styles.structure}>
          {STRUCTURE_CONTENT.list.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.moduleHeader}>
                <div className={styles.moduleNumber}>
                  <span className="text-secondary">{item.moduleNumber}</span>
                </div>
                <div className={styles.moduleTitle}>
                  <p>{item.moduleTitle}</p>
                </div>
                <div className={styles.plusButton}>
                  <img src={PlusSRC} alt="plus" />
                </div>
              </div>
              <div className={styles.line}></div>
              {console.log(item.moduleImage) }
              {item.moduleImage && (
                <div className={styles.imageContainer}>
                  <img src={item.moduleImage} alt="module" className={styles.moduleImage} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Structure;
