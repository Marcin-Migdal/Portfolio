import React, { useRef } from 'react'
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';

export default function App() {
  const refArray = useRef([]);

  return (
    <>
      <NavBar refArray={refArray} />
      <Home />
      <div className="sectionContainer" ref={el => refArray.current[0] = el}>
        <AboutMe />
      </div>
      <div className="sectionContainer" ref={el => refArray.current[1] = el}>
        <Projects />
      </div>
      <div className="sectionContainer" ref={el => refArray.current[2] = el}>
        <Technologies />
      </div>
    </>
  );
}