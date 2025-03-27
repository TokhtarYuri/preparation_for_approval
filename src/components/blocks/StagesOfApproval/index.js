import styles from "./StagesOfApproval.module.css";
import { STAGES_CONTENT } from "../../../constants/text";
import StagesOfApprovalItem from "../../ui/StagesOfApprovalItem";
import Button from "../../ui/button";
import TooltipArrowSRC from "../../../images/tooltip-arrow.svg"

const StagesOfApproval = () => {

  return (
    <div className={styles.container}>
      <h2>
        {STAGES_CONTENT.title_1}
        <span className={"text-secondary"}>
          {STAGES_CONTENT.title_2}
        </span>
      </h2>
      <p className={styles.stageTitle}>
        {STAGES_CONTENT.stages_title_1}
        <span className={"text-secondary"}>
          {STAGES_CONTENT.stages_title_2}
        </span>
      </p>
      <div className={styles.stagesContainer}>
        {STAGES_CONTENT.stages.map((stage, index) => (
          <StagesOfApprovalItem
            key={index}
            indexNumber={stage.indexNumber}
            stageTitleText={stage.stageTitleText}
            stageText={stage.stageText}
          />
        ))}
      </div>
      <h3 className={styles.help}>
        {STAGES_CONTENT.help}
      </h3>
      <p className={styles.helpDescription}>
        {STAGES_CONTENT.help_description}
      </p>
      <Button className={styles.button}>
        {STAGES_CONTENT.button_text} 
      </Button>
      <div className={styles.tooltip}>
        <div className={styles.tooltipIcon}>
          <img src={TooltipArrowSRC} alt="tooltip" />
        <p><span className={`${"text-secondary"} ${styles.bold}`}>{STAGES_CONTENT.tooltip_1}</span></p>
        <p>{STAGES_CONTENT.tooltip_2}</p>
        </div>
      </div>
    </div>
  );
};

export default StagesOfApproval;
