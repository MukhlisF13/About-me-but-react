import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from './Home'; 
import Hobbies from './Hobbies'; 
import Projects from './Projects'; 
import Resume from './Resume'; 

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        <li><Link to="/resume" style={styles.link}>Resume</Link></li>
        <li><Link to="/hobbies" style={styles.link}>Hobbies</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

const styles = {
  container: {
    backgroundColor: "#E2E8FF",
    padding: "20px",
    color: "black",
    textAlign: "center",
    listStylePosition: "inside",
    margin: "auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default App;
