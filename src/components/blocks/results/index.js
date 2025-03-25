import styles from "./Results.module.css";
import { RESULT_CONTENT } from "../../../constants/text";

const Results = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>
                    {RESULT_CONTENT.title_1}
                    <span className={"text-secondary"}>
                        {RESULT_CONTENT.title_2}
                    </span>
                    {RESULT_CONTENT.title_3}
                </h2>

                <div className={styles.results}>
                    {RESULT_CONTENT.results.map((item, index) => (
                        <div key={index} className={styles.resultItem}>
                            <div className={styles.willLearn}>
                                <p>
                                    {RESULT_CONTENT.willLearn}
                                </p>
                                <div className={styles.line}></div>
                            </div>
                            <p>{item.willLearn}</p>
                            <div className={styles.willBeAbleTo}>
                                <div className={styles.line}></div>
                                <p>
                                    {RESULT_CONTENT.willBeAbleTo}
                                </p>
                            </div>
                            <p>{item.willBeAbleTo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Results;