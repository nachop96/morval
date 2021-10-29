import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src='https://i.blogs.es/560885/game-over/450_1000.jpg'  alt="logo" />
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Perdiste :(
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          @SCOLY
        </a>
      </header>
    </div>
  );
}

export default App;
