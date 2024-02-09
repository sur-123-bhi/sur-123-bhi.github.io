import React, { useState,useRef, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  let homeRef = useRef(null);
  let aboutRef = useRef(null);
  let contactRef = useRef(null);
  let resumeRef = useRef(null);
  let projectsRef = useRef(null);
  let skillsRef = useRef(null);

  const scrollToRef = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  };

  return (
    <Router>  
     <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar scrollToRef={scrollToRef} homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} skillsRef={skillsRef} resumeRef={resumeRef} projectsRef={projectsRef}/>
          <Home forwardedRef={homeRef} />
          <About forwardedRef={aboutRef} />
          <Skills forwardedRef={skillsRef} />
          <Contact forwardedRef={contactRef} />
          <Projects forwardedRef={projectsRef} />
          <Resume forwardedRef={resumeRef} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;














