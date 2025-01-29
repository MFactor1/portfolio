import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import resume from './assets/Resume.pdf'

import useIsMobile from './components/IsMobile'

import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Readings from './pages/Readings'

export default function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Router>
        <header className="headerbar">
          <h1 className="title" style={{ textAlign: isMobile ? "center" : "left" }}>Matthew Nesbitt</h1>
          <nav className="navbar" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left"}}>
            <Link to="/" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Home</Link>
            <Link to="/experience" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Experience</Link>
            <Link to="/projects" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Projects</Link>
            <Link to="/skills" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Skills</Link>
            <Link to="/readings" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Readings</Link>
          </nav>
        </header>
        <main className="bodypages" style={{ marginLeft: isMobile ? "0px" : "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/readings" element={<Readings />} />
          </Routes>
        </main>
      </Router>
      <footer>
        <hr />
        <div className="footerContent">
          <nav className="footerLinks">
            <a href="https://www.linkedin.com/in/matthewnesbitt8" target="_blank">-> LinkedIn</a>
            <a href="https://www.github.com/MFactor1" target="_blank">-> GitHub</a>
            <a href={resume} download="Resume.pdf">-> Resume</a>
          </nav>
          <div className="credits">
            <span>Matthew Nesbitt 2024</span>
          </div>
        </div>
      </footer>
      <Analytics />
    </>
  );
}
