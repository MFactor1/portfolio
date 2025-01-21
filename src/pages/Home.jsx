import React from 'react'

import pfp from '../assets/images/WebsitePfp.png'

import useIsMobile from '../components/IsMobile'

export default function Home() {
  const isMobile = useIsMobile();

	return (
		<>
      <div className="homeimage" style={{marginTop: isMobile ? "0px" : "40px"}}>
        <img src={pfp} alt="Portrait" style={{maxHeight: '25vh', maxWidth: '60vw', display: "block", marginLeft: isMobile ? "auto" : "0px", marginRight: "auto"}}/>
      </div>
			<div className="bio">
				<p>Hi, thanks for stopping by!</p>
				<p>
          <i>Where I'm at:</i>
          <br />
          Pursuing Software Engineering at McMaster University
          <br />
          Working to support our project teams McMaster Artificial Intelligence Society
          <br />
          Pushing my limits on a road bike
          <br />
          Searching for where the snow is fresh
				</p>
			</div>
		</>
	);
}
