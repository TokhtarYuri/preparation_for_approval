import styles from "./Structure.module.css";
import { STRUCTURE_CONTENT } from "../../../constants/text";

const Structure = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>
                    {STRUCTURE_CONTENT.title}
                </h2>

                <div className={styles.structure}>
                    {STRUCTURE_CONTENT.list.map((item, index) => (
                        <div key={index} className={styles.listItem}>
                            <div className={styles.moduleHeader}>
                                <div className={styles.moduleNumber}>
                                    <p><span className="text-secondary"> {item.moduleNumber} </span> </p>
                                </div>
                                <div className={styles.moduleTitle}>
                                    <p>{item.moduleTitle}</p>
                                </div>
                                <div className={styles.plusButton}>
                                    <img src="/assets/images/plus.svg" alt="plus" className={styles.image} />
                                </div>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.imageContainer}>
                                {
                                    item.image && (
                                        <img src={item.image} alt="star" className={styles.image} />
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Structure;