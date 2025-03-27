import styles from "./ParticipationFormat.module.css";
import { PARTICIPATION_FORMAT_CONTENT } from "../../../constants/text";
import CrossSRC from "../../../images/cross.svg"
import CheckmarkSRC from "../../../images/checkmark.svg"

const ParticipationFormat = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>
                    {PARTICIPATION_FORMAT_CONTENT.title}
                </h2>


                {/* MAXIMUM start */}
                <div className={styles.maximumContainer}>
                    <div className={styles.maximumTitle}>
                        <h4>{PARTICIPATION_FORMAT_CONTENT.maximumTitle}</h4>
                        <p>{PARTICIPATION_FORMAT_CONTENT.maximumDescription}</p>
                    </div>
                    <div className={styles.line}></div>
                    {PARTICIPATION_FORMAT_CONTENT.listMaximum.map((item, index) => (
                        <div key={index} className={styles.listItem}>
                            <div className={styles.value}>
                                <div className={styles.cross}>
                                    {!item.value && (
                                        <img src={CrossSRC} alt="cross" />
                                    )}
                                </div>
                                <div className={styles.checkmark}>
                                    {item.value && (
                                        <img src={CheckmarkSRC} alt="checkmark" />
                                    )}
                                </div>

                            </div>
                            <div className={styles.termItem}>
                                <p>{item.termItem}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.estimatedPrice}>
                        <p>{PARTICIPATION_FORMAT_CONTENT.estimatedPrice}</p>
                    </div>

                    <div className={styles.priceContainer}>
                        <div className={styles.fullPrice}>
                            <p className="text-secondary">{PARTICIPATION_FORMAT_CONTENT.fullPrice}</p>
                            <span>{PARTICIPATION_FORMAT_CONTENT.maximumFullPrice}</span>
                        </div>
                        <div className={styles.priceLine}></div>
                        <div className={styles.inInstallments}>
                            <p className="text-secondary">{PARTICIPATION_FORMAT_CONTENT.inInstallments}</p>
                            <span>{PARTICIPATION_FORMAT_CONTENT.maximumInInstallments}</span>
                        </div>
                    </div>
                </div>
                {/* MAXIMUM end */}
                {/* PRO start */}
                <div className={styles.maximumContainer}>
                    <div className={styles.maximumTitle}>
                        <h4>{PARTICIPATION_FORMAT_CONTENT.proTitle}</h4>
                        <p>{PARTICIPATION_FORMAT_CONTENT.proDescription}</p>
                    </div>
                    <div className={styles.line}></div>
                    {PARTICIPATION_FORMAT_CONTENT.listPro.map((item, index) => (
                        <div key={index} className={styles.listItem}>
                            <div className={styles.value}>
                                <div className={styles.cross}>
                                    {!item.value && (
                                        <img src={CrossSRC} alt="cross" />
                                    )}
                                </div>
                                <div className={styles.checkmark}>
                                    {item.value && (
                                        <img src={CheckmarkSRC} alt="checkmark" />
                                    )}
                                </div>

                            </div>
                            <div className={styles.termItem}>
                                <p>{item.termItem}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.estimatedPrice}>
                        <p>{PARTICIPATION_FORMAT_CONTENT.estimatedPrice}</p>
                    </div>

                    <div className={styles.priceContainer}>
                        <div className={styles.fullPrice}>
                            <p className="text-secondary">{PARTICIPATION_FORMAT_CONTENT.fullPrice}</p>
                            <span>{PARTICIPATION_FORMAT_CONTENT.proFullPrice}</span>
                        </div>
                        <div className={styles.priceLine}></div>
                        <div className={styles.inInstallments}>
                            <p className="text-secondary">{PARTICIPATION_FORMAT_CONTENT.inInstallments}</p>
                            <span>{PARTICIPATION_FORMAT_CONTENT.proInInstallments}</span>
                        </div>
                    </div>
                </div>
                {/* PRO end */}
                {/* BASIC start */}
                <div className={styles.maximumContainer}>
                    <div className={styles.maximumTitle}>
                        <h4>{PARTICIPATION_FORMAT_CONTENT.basicTitle}</h4>
                        <p>{PARTICIPATION_FORMAT_CONTENT.basicDescription}</p>
                    </div>
                    <div className={styles.line}></div>
                    {PARTICIPATION_FORMAT_CONTENT.listBasic.map((item, index) => (
                        <div key={index} className={styles.listItem}>
                            <div className={styles.value}>
                                <div className={styles.cross}>
                                    {!item.value && (
                                        <img src={CrossSRC} alt="cross" />
                                    )}
                                </div>
                                <div className={styles.checkmark}>
                                    {item.value && (
                                        <img src={CheckmarkSRC} alt="checkmark" />
                                    )}
                                </div>

                            </div>
                            <div className={styles.termItem}>
                                <p>{item.termItem}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.estimatedPrice}>
                        <p>{PARTICIPATION_FORMAT_CONTENT.estimatedPrice}</p>
                    </div>

                    <div className={styles.priceContainer}>
                        <div className={styles.fullPrice}>
                            <p className="text-secondary">{PARTICIPATION_FORMAT_CONTENT.fullPrice}</p>
                            <span>{PARTICIPATION_FORMAT_CONTENT.basicFullPrice}</span>
                        </div>
                        <div className={styles.priceLine}></div>
                        <div className={styles.inInstallments}>
                            <p className="text-secondary">{PARTICIPATION_FORMAT_CONTENT.inInstallments}</p>
                            <span>{PARTICIPATION_FORMAT_CONTENT.basicInInstallments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ParticipationFormat;