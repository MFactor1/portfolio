import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

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

function Nav() {
  const isMobile = useIsMobile();
  const tabs = [
    {path: "/", label: "Home", ul_scale: isMobile ? 0.4 : 0.6},
    {path: "/experience", label: "Experience", ul_scale: isMobile ? 0.8 : 0.8},
    {path: "/projects", label: "Projects", ul_scale: isMobile ? 0.7 : 0.8},
    {path: "/skills", label: "Skills", ul_scale: isMobile ? 0.5 : 0.7},
    {path: "/readings", label: "Readings", ul_scale: isMobile ? 0.7 : 0.8},
  ];
  const navigator = useNavigate();

  return (
    <>
      {isMobile ?
        <nav className="navbar"  style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
          {tabs.map((item) => (
            <ScrollFade>
              <motion.li
                key={item.path}
                className='navTab'
                onClick={() => navigator(item.path)}
              >
                {item.label}
                {item.path === useLocation().pathname && (
                  <AnimatePresence>
                    <motion.div
                      key={item.path}
                      className='mobileNavUnderline'
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: item.ul_scale
                      }}
                      exit={{
                        scaleX: 0,
                      }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>
                )}
              </motion.li>
            </ScrollFade>
          ))}
        </nav>
      :
        <nav className="desktopnavbar">
          {tabs.map((item) => (
            <ScrollFade>
              <motion.li
                key={item.path}
                initial={false}
                className='navTab'
                onClick={() => navigator(item.path)}
              >
                {item.label}
                {item.path === useLocation().pathname ? (
                  <AnimatePresence>
                    <motion.div
                      className='navUnderline'
                      layoutId='navUnderline'
                      id='navUnderline'
                      initial={{
                        scale: 1.5,
                      }}
                      animate={{
                        scale: item.ul_scale
                      }}
                      exit={{
                        scale: 1.5,
                      }}
                    />
                  </AnimatePresence>
                ) : null}
              </motion.li>
            </ScrollFade>
          ))}
        </nav>
      }
    </>
  );
}

export default function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <div style = {{ position: 'absolute', height: '101vh', width: '1px', top: '0px', left: '0px' }}></div> {/* empty div forcing a scroll bar on all pages (otherwise ForceScrollUpdate won't work)*/}
        <header className="headerbar">
          <ScrollFade>
            <h1 className="title" style={{ textAlign: isMobile ? "center" : "left" }}>Matthew Nesbitt</h1>
          </ScrollFade>
          <Nav />
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
