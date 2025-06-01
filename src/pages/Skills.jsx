import React from 'react'

import Footer from '../components/Footer'

import ScrollFade from '../components/ScrollFade'

export default function Skills() {
  return (
    <>
      <div>
        <ScrollFade>
          <p className='skillsTitle'>
            What we're working with:
          </p>
        </ScrollFade>
        <ScrollFade>
          <p className='skillItem'>
            <b><i>Languages:</i></b> Python, Java, TypeScript/JavaScript, C/C++, Bash Script, SQL, HTML/CSS, LaTeX.
          </p>
        </ScrollFade>
        <ScrollFade>
          <p className='skillItem'>
            <b><i>Frameworks/Libraries:</i></b> React.JS, gevent, Expo, framer-motion, kivy, OpenCV, spaCy, Node.JS, JUnit, unittest.
          </p>
        </ScrollFade>
        <ScrollFade>
          <p className='skillItem'>
            <b><i>Tools:</i></b> git, Linux, Docker, Jenkins, Jira, MS Office, Azure Blob Storage, GCS, Amazon S3, Make, rpm, dpkg, UML, Sonarqube.
          </p>
        </ScrollFade>
      </div>
      <Footer />
    </>
  );
}
