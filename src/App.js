import React from 'react';
import './App.sass';

import Navbar from './components/NavBar/NavBar'
import Mural from './components/Mural/Mural'
import Community from './components/Community/Community'
import Start from "./components/Start/Start";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mural/>
      <Community/>
      <Start />
    </div>
  );
}

export default App;
