import React from 'react';
import ScrollFade from './ScrollFade';
import resume from '../assets/Resume.pdf'

const Footer = () => {
  return (
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
  )
}

export default Footer
