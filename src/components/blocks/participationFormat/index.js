import styles from "./ParticipationFormat.module.css";
import { PARTICIPATION_FORMAT_CONTENT } from "../../../constants/text";
import CrossSRC from "../../../images/cross.svg";
import CheckmarkSRC from "../../../images/checkmark.svg";
import { getImageSrc } from "../../../utils/imageHelper";

const PlanCard = ({ plan }) => (
  <div className={styles.planCard}>
    <div className={styles.planHeader}>
      <h4>{plan.title}</h4>
      <p>{plan.description}</p>
    </div>
    <div className={styles.list}>
      {plan.list.map((item, idx) => (
        <div key={idx} className={styles.listItem}>
          <div className={styles.icon}>
            {item.value ? (
              <img src={getImageSrc(CheckmarkSRC)} alt="checkmark" />
            ) : (
              <img src={getImageSrc(CrossSRC)} alt="cross" />
            )}
          </div>
          <div className={styles.term}>
            <p>{item.termItem}</p>
          </div>
        </div>
      ))}
    </div>
    <p>
      {plan.estimatedPrice}
    </p>
    <div className={styles.price}>
      <div className={styles.full}>
        <p className="text-secondary">{plan.fullPriceText}</p>
        <span>{plan.fullPrice}</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.installments}>
        <p className="text-secondary">{plan.installmentsText}</p>
        <span>{plan.installments}</span>
      </div>
    </div>
  </div>
);

const ParticipationFormat = () => {
  const plans = [
    {
      title: PARTICIPATION_FORMAT_CONTENT.maximumTitle,
      description: PARTICIPATION_FORMAT_CONTENT.maximumDescription,
      list: PARTICIPATION_FORMAT_CONTENT.listMaximum,
      fullPriceText: PARTICIPATION_FORMAT_CONTENT.fullPrice,
      fullPrice: PARTICIPATION_FORMAT_CONTENT.maximumFullPrice,
      installmentsText: PARTICIPATION_FORMAT_CONTENT.inInstallments,
      installments: PARTICIPATION_FORMAT_CONTENT.maximumInInstallments,
      estimatedPrice: PARTICIPATION_FORMAT_CONTENT.estimatedPrice,
    },
    {
      title: PARTICIPATION_FORMAT_CONTENT.proTitle,
      description: PARTICIPATION_FORMAT_CONTENT.proDescription,
      list: PARTICIPATION_FORMAT_CONTENT.listPro,
      fullPriceText: PARTICIPATION_FORMAT_CONTENT.fullPrice,
      fullPrice: PARTICIPATION_FORMAT_CONTENT.proFullPrice,
      installmentsText: PARTICIPATION_FORMAT_CONTENT.inInstallments,
      installments: PARTICIPATION_FORMAT_CONTENT.proInInstallments,
      estimatedPrice: PARTICIPATION_FORMAT_CONTENT.estimatedPrice,
    },
    {
      title: PARTICIPATION_FORMAT_CONTENT.basicTitle,
      description: PARTICIPATION_FORMAT_CONTENT.basicDescription,
      list: PARTICIPATION_FORMAT_CONTENT.listBasic,
      fullPriceText: PARTICIPATION_FORMAT_CONTENT.fullPrice,
      fullPrice: PARTICIPATION_FORMAT_CONTENT.basicFullPrice,
      installmentsText: PARTICIPATION_FORMAT_CONTENT.inInstallments,
      installments: PARTICIPATION_FORMAT_CONTENT.basicInInstallments,
      estimatedPrice: PARTICIPATION_FORMAT_CONTENT.estimatedPrice,
    },
  ];


  return (
    <div className={styles.container}>
      <h2>{PARTICIPATION_FORMAT_CONTENT.title}</h2>
      <div className={styles.plans}>
        {plans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default ParticipationFormat;
