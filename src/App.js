import './App.css';
import Background from './components/blocks/background';
import Headers from './components/blocks/header';
import Problems from './components/blocks/problems';
import Main from './components/blocks/main';

function App() {
  return (
    <>
      <Headers />
      <div className="App-body">
        {/*    <Background/> */}
        <Main />
        <Problems />
      </div>
    </>
  );
}

export default App;
