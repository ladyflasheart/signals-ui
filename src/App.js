import React from 'react'
import './App.css'
import SignalForm from './survey/SignalForm'

function App() {

  return (
    <div className="App">
      <header className="App-header">Signals
      </header>
      <main className="App-main">
        <SignalForm>
        </SignalForm>
      </main>
      <footer className="App-footer">
        &copy; Erica Bradbury 2019
      </footer>
    </div>
  );
}

export default App;
