import React from 'react';
import './App.sass';

import Navbar from './components/NavBar/NavBar'
import Mural from './components/Mural/Mural'
import Community from './components/Community/Community'
import Start from './components/Start/Start'
import Disposal from './components/Disposal/Disposal'
import Footer from './components/Footer/Footer'
import SideNav from "./components/NavBar/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav />>
      <Mural />
      <Community />
      <Start />
      <Disposal />
      <Footer/>
    </div>
  );
}

export default App;
