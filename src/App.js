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
        <YouGet />
        <PracticalApproach />
        <Structure />
        <ParticipationFormat />
        <RegistrationForm />
      </div>
    </>
  );
}

export default App;
