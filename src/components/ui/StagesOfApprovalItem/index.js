
import styles from "./StagesOfApprovalItem.module.css";

const StagesOfApprovalItem = ({ indexNumber, stageTitleText, stageText }) => {
    return (
        <div className={styles.container}>
            <div className={styles.stageNumber}>
                <p>{indexNumber}</p>
                <img src="/assets/images/arrow.svg" alt="arrow" />
            </div>
            <div className={styles.stageTextContainer}>
                <p className={styles.stageTitleText}>{stageTitleText}</p>
                <p className={styles.stageText}>{stageText}</p>
            </div>
        </div>
    );
};

export default StagesOfApprovalItem;
