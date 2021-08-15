import './App.css';
import ScoutContainer from './components/ScoutContainer/ScoutContainer';
import BadgeContainer from './components/BadgeContainer/BadgeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Scouts BSA Badge Tracker
      </header>
      <header className="scout-header">
        <ScoutContainer />
      </header>
      <BadgeContainer />
    </div>
  );
}

export default App;
