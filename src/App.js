import React from 'react';
import logo from './logo.svg';
import './App.sass';

import Navbar from './components/NavBar/NavBar'
import Mural from './components/Mural/Mural'
import Community from './components/Community/Community'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mural/>
      <Community/>
    </div>
  );
}

export default App;
