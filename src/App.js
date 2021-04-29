import React, { useRef } from 'react'
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import AboutMe from './components/AboutMe/AboutMe';

export default function App() {
  const refArray = useRef([]);

  return (
    <>
      <NavBar refArray={refArray} />
      <div className="sectionContainer" >
        <Home />
      </div>
      <div className="sectionContainer" ref={el => refArray.current[0] = el}>
        <AboutMe />
      </div>
      <div className="sectionContainer" ref={el => refArray.current[1] = el}>
        <Projects refArray={refArray} />
      </div>
      <div className="sectionContainer" ref={el => refArray.current[2] = el}>
        <Technologies />
      </div>
      <div className="sectionContainer" ref={el => refArray.current[3] = el}>
        <Contact />
      </div>

      <p className="footer">Copyright © Marcin Migdał 2021</p>
    </>
  );
}