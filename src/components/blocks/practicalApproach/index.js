import styles from "./PracticalApproach.module.css";
import { PRACTICAL_APPROACH_CONTENT } from "../../../constants/text";

const PracticalApproach = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>
                    <span className={"text-secondary"}>{PRACTICAL_APPROACH_CONTENT.title_1}</span>
                    <br />
                    {PRACTICAL_APPROACH_CONTENT.title_2}
                </h2>

                <div className={styles.practical}>
                    {PRACTICAL_APPROACH_CONTENT.list.map((item, index) => (
                        <div key={index} className={styles.listItem}>
                            <img src={item.image} alt="icon" className={styles.image} />
                            <div className={styles.itemImageBackgroundCircle}></div>
                                <div className={styles.itemTitle}>
                                    <span className={"text-secondary"}><p>{item.itemTitle}</p></span>
                                </div>
                                <div className={styles.item}>
                                    <p>{item.item}</p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PracticalApproach;