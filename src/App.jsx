//import { useState } from 'react'
import './App.css'
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionHero from './components/SectionHero/SectionHero';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <SectionHero />
        <SectionAbout />
        <SectionProjects />
      </div>
    </div>
  )
}

export default App
