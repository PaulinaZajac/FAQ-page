import '../styles/App.css';
import logo from '../images/logo.svg';
import dashboard from '../images/illustration-dashboard.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"></img>
      </header>
      <main className="App-main">
        <h2>We are launching soon!</h2>
        <h3>Subscribe and get notified</h3>
        <div className="App-subscribe-form">
          <input></input>
          <button>Notify Me</button>
        </div>
        <div className="Dashboard">
          <img src={dashboard} alt="dashboard"></img>
        </div>
      </main>
      <footer className="App-footer">
        © Copyright Ping. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
