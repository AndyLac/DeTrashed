import React from 'react';
import logo from './logo.svg';
import './App.sass';

import Navbar from './components/NavBar/NavBar'
import Mural from './components/Mural/Mural'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mural/>
    </div>
  );
}

export default App;
