import './App.css';
import Background from './components/blocks/background';
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

function App() {
  return (
    <>
      <Headers />
      <div className="App-body">
        {/*    <Background/> */}
        <Main />
        <Problems />
        <StagesOfApproval />
        <Experts />
        <ForYou />
        <Results/>
        <YouGet/>
        <PracticalApproach/>
        <Structure/>
        <ParticipationFormat/>
        <RegistrationForm/>
      </div>
    </>
  );
}

export default App;
