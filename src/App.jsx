import React from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import resume from './assets/Resume.pdf'

import useIsMobile from './components/IsMobile'
import ScrollFade from './components/ScrollFade'
import { ForceScrollUpdate } from './components/ForceScrollUpdate' // Force useScroll() update on page change
                                                                   // since it doesn't automatically due to a bug

import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Readings from './pages/Readings'

export default function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <div style = {{ position: 'absolute', height: '101vh', width: '1px', top: '0px', left: '0px' }}></div> {/* empty div forcing a scroll bar on all pages (otherwise ForceScrollUpdate won't work)*/}
        <header className="headerbar">
          <ScrollFade>
            <h1 className="title" style={{ textAlign: isMobile ? "center" : "left" }}>Matthew Nesbitt</h1>
          </ScrollFade>
          <nav className="navbar" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left"}}>
            <ScrollFade>
              <Link to="/" onClick={() => setTimeout(ForceScrollUpdate, 200)} style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Home</Link>
            </ScrollFade>
            <ScrollFade>
              <Link to="/experience" onClick={() => setTimeout(ForceScrollUpdate, 200)} style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Experience</Link>
            </ScrollFade>
            <ScrollFade>
              <Link to="/projects" onClick={() => setTimeout(ForceScrollUpdate, 200)} style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Projects</Link>
            </ScrollFade>
            <ScrollFade>
              <Link to="/skills" onClick={() => setTimeout(ForceScrollUpdate, 200)} style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Skills</Link>
            </ScrollFade>
            <ScrollFade>
              <Link to="/readings" onClick={() => setTimeout(ForceScrollUpdate, 200)} style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Readings</Link>
            </ScrollFade>
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
        <footer>
          <ScrollFade>
            <hr />
          </ScrollFade>
          <div className="footerContent">
            <ScrollFade>
              <nav className="footerLinks">
                <a href="https://www.linkedin.com/in/matthewnesbitt8" target="_blank">{"->"} LinkedIn</a>
                <a href="https://www.github.com/MFactor1" target="_blank">{"->"} GitHub</a>
                <a href={resume} download="Resume.pdf">{"->"} Resume</a>
              </nav>
            </ScrollFade>
            <ScrollFade>
              <div className="credits">
                <span>Matthew Nesbitt 2025</span>
              </div>
            </ScrollFade>
          </div>
        </footer>
      <Analytics />
    </>
  );
}
