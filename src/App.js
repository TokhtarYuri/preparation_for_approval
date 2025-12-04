import './App.css';
import Headers from './components/blocks/header';
import Problems from './components/blocks/problems';
import Main from './components/blocks/main';
import StagesOfApproval from './components/blocks/StagesOfApproval';
import Experts from './components/blocks/experts';
import ForYou from './components/blocks/forYou';
import Results from './components/blocks/results';
import YouGet from './components/blocks/youGet';
import PracticalApproach from './components/blocks/practicalApproach';
import Structure from './components/blocks/structure';
import ParticipationFormat from './components/blocks/participationFormat';
import RegistrationForm from './components/blocks/registrationForm';
import styles from "./styles/background.module.css";
import MainBackgroundImgSRC from "./images/main-background.png"
import Reviews from './components/blocks/reviews';

function App() {
  return (
    <>
      <Headers />
      <div className="App-body">

        <div className={styles.mainWrapper}>
          <div className={styles.background}>
            <img src={MainBackgroundImgSRC} alt="" className={styles.mainBackgroundImgSRC} />
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

export default App;
