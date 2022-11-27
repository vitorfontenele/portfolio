//import { useState } from 'react'
import './App.css'
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionProjects from "./components/SectionProjects/SectionProjects";

function App() {
  return (
    <div className="App">
      <div id="content">
        <SectionAbout />
        <SectionProjects />
      </div>
    </div>
  )
}

export default App
