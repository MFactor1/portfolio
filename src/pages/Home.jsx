import React from 'react'

import pfp from '../assets/images/WebsitePfp.png'

import Footer from '../components/Footer'

import useIsMobile from '../components/IsMobile'
import ScrollFade from '../components/ScrollFade'

export default function Home() {
  const isMobile = useIsMobile();

	return (
		<>
      <ScrollFade>
        <div className="homeimage" style={{marginTop: isMobile ? "0px" : "40px"}}>
          <img src={pfp} alt="Portrait" style={{maxHeight: '25vh', maxWidth: '60vw', display: "block", marginLeft: isMobile ? "auto" : "0px", marginRight: "auto"}}/>
        </div>
      </ScrollFade>
      <div className="bio" style={{ maxWidth: isMobile ? '100vw' : '50vw' }}>
        <ScrollFade><p>Hi— I’m Matthew Nesbitt, a third-year Software Engineering student at McMaster University with a 3.9 CGPA who’s happiest when difficult problems meet elegant code.</p></ScrollFade>
        <ScrollFade><p><i>What drives me?</i> Building and optimizing real-world systems. I’ve modernized a legacy multi-million-dollar Python 2 broadcast platform at Evertz, halving
        CI build times with Docker caching and accelerating cloud video exports 6× by re-architecting file pipelines. I also lead AI initiatives at MacAI, where my
        team shipped NoteFlow—an NLP summarizer powered by spaCy, TextRank, and T5 transformers that we presented at CUCAI 2024.</p></ScrollFade>
        <ScrollFade><p><i>Why are my skills top-notch?</i> Depth and range. From low-level C/C++ to full-stack TypeScript/React/Electron, from SQLite local storage to cloud object
        stores (Azure Blob, S3, GCS), I pair solid fundamentals—data structures, concurrency, testing—with practical tooling: Docker, Jenkins, gevent, systemd,
        rpm/dpkg packaging. I thrive in Linux, automate everything with git and Bash, and enjoy mentoring—currently scaling MacAI’s projects division and budget to deliver impactful research.</p></ScrollFade>
        <ScrollFade><p>Whether porting multi-million-dollar codebases, designing clean UIs, or leading cross-functional teams, I bring curiosity, discipline, and a proven
        record of turning ambitious ideas into robust software. Let’s build something remarkable together.</p></ScrollFade>
			</div>
      <Footer />
		</>
	);
}
