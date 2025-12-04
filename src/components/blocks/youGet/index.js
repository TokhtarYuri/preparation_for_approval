import styles from "./YouGet.module.css";
import { YOUGET_CONTENT } from "../../../constants/text";
import StarSRC from "../../../images/star.svg";

const YouGet = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>{YOUGET_CONTENT.title}</h2>

        <div className={styles.results}>
          {YOUGET_CONTENT.list.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.iconWrapper}>
                <img src={StarSRC} alt="star" className={styles.image} />
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.itemTitle}>{item.itemTitle}</p>
                <p className={styles.item}>{item.item}</p>
              </div>
            </div>
          ))}
        </div>

        <h4>
          <span className="text-secondary">{YOUGET_CONTENT.titleFooter_1}</span>
          <br />
          {YOUGET_CONTENT.titleFooter_2}
        </h4>
      </div>
    </div>
  );
};

export default YouGet;
