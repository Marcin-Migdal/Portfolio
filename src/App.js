import React, { useRef } from 'react'
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Technologies from './components/Technologies/Technologies';

export default function App() {
  const refArray = useRef([]);

  return (
    <>
      <NavBar refArray={refArray} />
      <Home />
      <AboutMe refArray={refArray} />
      <Technologies refArray={refArray}/>
    </>
  );
}