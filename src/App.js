import React from 'react';
import './App.css';
import Question from './survey/Question';

function App() {
  return (
    <div className="App">
      <header className="App-header">Signals
      </header>
      <main className="App-main">
       <Question questionText="How do you feel about trust levels within the team?"/>
        <div> Answer placeholder</div>
      </main>
      <footer className="App-footer">
        &copy; Erica Bradbury 2019
      </footer>
    </div>
  );
}

export default App;
