import React from 'react'

import pfp from '../assets/images/WebsitePfp.png'

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
			<div className="bio">
        <ScrollFade><p>Hi, thanks for stopping by!</p></ScrollFade>
        <ScrollFade><i>Where I'm at:</i></ScrollFade>
        <ScrollFade>Pursuing Software Engineering at McMaster University</ScrollFade>
        <ScrollFade>Working to grow the Agora community (<a href='https://lu.ma/theagora' target="_blank">https://lu.ma/theagora</a>)</ScrollFade>
        <ScrollFade>Pushing my limits on a road bike</ScrollFade>
        <ScrollFade>Searching for where the snow is fresh</ScrollFade>
			</div>
		</>
	);
}
