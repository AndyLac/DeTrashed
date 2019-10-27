import React from 'react';
import './App.sass';

import Navbar from './components/NavBar/NavBar'
import Mural from './components/Mural/Mural'
import Community from './components/Community/Community'
import Start from './components/Start/Start'
import Disposal from './components/Disposal/Disposal'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mural />
      <Community id='community'/>
      <Start id='start'/>
      <Disposal id='disposal'/>
      <Footer/>
    </div>
  );
}

export default App;
