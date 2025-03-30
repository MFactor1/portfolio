import React from 'react'
import useIsMobile from '../components/IsMobile'
import ScrollFade from '../components/ScrollFade'

import isMathReal from '../assets/images/isMathReal.jpg'
import humansHistory from '../assets/images/humansHistory.jpg'

export default function Readings() {
  const isMobile = useIsMobile()
  return (
    <>
      <ScrollFade>
        <div className='readingsDesc' style={{ textAlign: isMobile ? "center" : "left" }}>
          Rekindling my love for reading.
        </div>
      </ScrollFade>
      <ScrollFade>
        <header className='readingsHeaders' style={{ textAlign: isMobile ? "center" : "left" }}>
          Readings in Progress{ isMobile ? "" : ":" }
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="imgPanel">
          <img className="displayImage" src={isMathReal} alt="Cover of 'Is Math Real' by Eugenia Cheng" style={{ maxHeight: '33vh', maxWidth: '90vw', display: "block", marginLeft: isMobile ? "auto" : "0px", marginRight: "auto" }}/>
        </div>
      </ScrollFade>
      <ScrollFade>
        <div className="bookName" style={{ textAlign: isMobile ? "center" : "left" }}>
          <i>Is Math Real?</i> by Dr. Eugenia Cheng
        </div>
      </ScrollFade>
      <ScrollFade>
        <div className="bookDesc">
          Dr. Eugenia Cheng presents a fascinating exploration of mathematics through a unique "emotional" lens, guiding readers to challenge fundamental mathematical assumptions— like 1+1=2.
        </div>
      </ScrollFade>
      <ScrollFade>
        <header className='readingsHeaders' style={{ textAlign: isMobile ? "center" : "left" }}>
          Future Readings{ isMobile ? "" : ":" }
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="imgPanel">
          <img className="displayImage" src={humansHistory} alt="Cover of 'Is Math Real' by Eugenia Cheng" style={{ maxHeight: '33vh', maxWidth: '90vw', display: "block", marginLeft: isMobile ? "auto" : "0px", marginRight: "auto" }}/>
        </div>
      </ScrollFade>
      <ScrollFade>
        <div className="bookName" style={{ textAlign: isMobile ? "center" : "left" }}>
          <i>Humans: A Brief History Of How We F*cked It All Up</i> by Tom Phillips
        </div>
      </ScrollFade>
      <ScrollFade>
        <div className="bookDesc">
          Though I have not yet read it, <i>Humans</i> leads the reader through human history, highlighting all the times we've managed to "f*ck things up". I am quite looking forwards to reading this.
        </div>
      </ScrollFade>
    </>
  );
}
