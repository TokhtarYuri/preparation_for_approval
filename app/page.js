import Headers from '../src/components/blocks/header';
import Problems from '../src/components/blocks/problems';
import Main from '../src/components/blocks/main';
import StagesOfApproval from '../src/components/blocks/StagesOfApproval';
import Experts from '../src/components/blocks/experts';
import ForYou from '../src/components/blocks/forYou';
import Results from '../src/components/blocks/results';
import YouGet from '../src/components/blocks/youGet';
import PracticalApproach from '../src/components/blocks/practicalApproach';
import Structure from '../src/components/blocks/structure';
import ParticipationFormat from '../src/components/blocks/participationFormat';
import RegistrationForm from '../src/components/blocks/registrationForm';
import styles from "../src/styles/background.module.css";
import MainBackgroundImgSRC from "../src/images/main-background.png";
import Reviews from '../src/components/blocks/reviews';
import { getImageSrc } from '../src/utils/imageHelper';

export default function Home() {
  return (
    <>
      <Headers />
      <div className="App-body">

        <div className={styles.mainWrapper}>
          <div className={styles.background}>
            <img src={getImageSrc(MainBackgroundImgSRC)} alt="" className={styles.mainBackgroundImgSRC} />
          </div>
          <div className={styles.content}>
            <Main />
          </div>
        </div>

        <div className={styles.problemsWrapper}>
          <div className={styles.problemsBackground}>
            <div className={styles.ellipse17}></div>
          </div>
          <div className={styles.problemsContent}>
            <Problems />
          </div>
        </div>

        <div className={styles.stagesOfApproval}>
          <div className={styles.problemsToStages}></div>
          <div className={styles.content}>
            <StagesOfApproval />
          </div>
          <div className={styles.staegesToExperts}></div>
        </div>

        <div className={styles.experts}>
          <div className={styles.content}>
            <Experts />
          </div>
        </div>

        <div className={styles.forYou}>
          <div className={styles.content}>
            <ForYou />
          </div>
        </div>

        <div className={styles.results}>
          <div className={styles.forYouToResults}></div>
          <div className={styles.content}>
            <Results />
          </div>
        </div>

        <div className={styles.youGet}>
          <div className={styles.content}>
            <YouGet />
          </div>
          <div className={styles.resultsToYouGet}></div>
        </div>

        <div className={styles.practicalApproach}>
          <div className={styles.content}>
            <PracticalApproach />
          </div>
        </div>

        <div className={styles.structure}>
          <div className={styles.practicalApproachToStructure}></div>
          <div className={styles.content}>
            <Structure />
          </div>
          <div className={styles.structureToParticipationFormat}></div>
        </div>

        <div className={styles.participationFormat}>
          <div className={styles.content}>
            <ParticipationFormat />
          </div>
        </div>

        <div className={styles.reviewsWrapper}>
          <div className={styles.participationFormatToReviews}></div>
          <div className={styles.reviewsContent}>
            <Reviews />
          </div>
          <div className={styles.reviewsWrapperToRegistrationForm}></div>
        </div>

        <div id="registration-form" className={styles.registrationForm}>
          <div className={styles.content}>
            <RegistrationForm />
          </div>
        </div>

      </div>
    </>
  );
}

