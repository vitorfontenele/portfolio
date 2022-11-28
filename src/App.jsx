//import { useState } from 'react'
import './App.css'
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionHero from './components/SectionHero/SectionHero';

function App() {
  return (
    <div className="App">
      <div id="content">
        <SectionHero />
        <SectionAbout />
        <SectionProjects />
      </div>
    </div>
  )
}

export default App
