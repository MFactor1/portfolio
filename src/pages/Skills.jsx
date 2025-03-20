import React from 'react'

export default function Skills() {
  return (
    <>
      <div style = {{ position: 'absolute', height: '101vh', width: '10vw', top: '0px', left: '0px' }}></div>
      <div>
        <p className='skillsTitle'>
          What we're working with:
        </p>
        <p className='skillItem'>
          <b><i>Languages:</i></b> Python, Java, JavaScript, C/C++, Bash Script, SQL, HTML/CSS, LaTeX.
        </p>
        <p className='skillItem'>
          <b><i>Frameworks/Libraries:</i></b> React.JS, gevent, kivy, OpenCV, spaCy, Node.JS, JUnit, unittest.
        </p>
        <p className='skillItem'>
          <b><i>Tools:</i></b> git, Linux, Docker, Jenkins, Jira, MS Office, Azure Blob Storage, GCS, Amazon S3, Make, rpm, dpkg, UML, Sonarqube.
        </p>
      </div>
    </>
  );
}
