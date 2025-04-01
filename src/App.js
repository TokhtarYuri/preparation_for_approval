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

function App() {
  return (
    <>
      <Headers />
      <div className="App-body">
        <div className={styles.main}>
          <Main />
        </div>
        <div className={styles.problems}>
          <div className={styles.mainToProblems}>
          </div>
          <Problems />
        </div>
        <div className={styles.stagesOfApproval}>
          <div className={styles.problemsToStages}>
          </div>
          <StagesOfApproval />
        </div>
        <div className={styles.experts}>
          <div className={styles.staegesToExperts}>
          </div>
          <Experts />
        </div>
        <div className={styles.forYou}>
          <div className={styles.expertsToForYou}>
          </div>
          <ForYou />
        </div>
        <div className={styles.results}>
          <div className={styles.forYouToResults}>
          </div>
          <Results />
        </div>
        <div className={styles.youGet}>
          <div className={styles.resultsToYouGet}>
          </div>
          <YouGet />
        </div>
        <div className={styles.practicalApproach}>
          <div className={styles.youGetToPracticalApproach}>
          </div>
          <PracticalApproach />
          <div className={styles.practicalApproachfooter}>
          </div>
        </div>
        <div className={styles.structure}>
          <div className={styles.practicalApproachToStructure}>
          </div>
          <Structure />
        </div>
        <div className={styles.participationFormat}>
          <div className={styles.structureToParticipationFormat}>
          </div>
          <ParticipationFormat />
        </div>
        <div className={styles.registrationForm}>
        <div className={styles.participationFormatToRegistrationForm}>
        </div>
          <RegistrationForm />
          <div className={styles.registrationFormFooter}>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
