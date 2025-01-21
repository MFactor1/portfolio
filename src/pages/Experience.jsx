import React from 'react'

export default function Experience() {
  return (
    <>
      <header>
        <h3 className="jobTitle">Software Design Engineer - Intern</h3>
        <p className="companyName">Evertz Microsystems</p>
      </header>
      <div className="jobDesc">
        <p className="jobSkills">
          Used: Python, Gevent, Jenkins, Linux, MAKE, Jira, GCS, Amazon S3, Azure Blob Storage
        </p>
        <p className="jobPoints">
          <li>Helped developed the <b>DreamCatcher</b> live replay system, in-use by <b>major broadcasters across the globe</b>.</li>
          <li>Improved average repository build times by over <b>2x</b> by implementing <b>build caching</b> using <b>Docker layers</b>.</li>
          <li>Direct-to-cloud video export <b>streaming</b> via a <b>FIFO</b> resulting in a <b>13% faster</b> export & upload process.</li>
          <li>Implemented a <b>FUSE</b> (Filesystem in Userspace) to tweak <b>FFMPEG's</b> process of writing video files.</li>
          <li>Slashed video upload times by over <b>6x</b> to <b>Azure blob storage</b> by <b>chunking</b> & <b>parallelizing</b> file uploads.</li>
        </p>
      </div>
      <header>
        <h3 className="jobTitle">Project Lead</h3>
        <p className="companyName">McMaster AI Society</p>
      </header>
      <div className="jobDesc">
        <p className="jobSkills">
          Used: Python, spaCy, transformer models
        </p>
        <p className="jobPoints">
          <li>Spearheaded NoteFlow, an <b>AI based</b> summarizer using <b>spaCy pipelines</b>, <b>T5 transformers</b>, and the <b>TextRank</b> algorithm.</li>
          <li>Contribute to, while also coordinating a tight knit <b>team of 6</b> to work on the development of NoteFlow.</li>
          <li>Present <i>NoteFlow</i> at <b>CUCAI 2024</b> (Canadian Undergraduate Conference for AI) in Kingston, Ontario.</li>
        </p>
      </div>
      <header>
        <h3 className="jobTitle">Director of Projects</h3>
        <p className="companyName">McMaster AI Society</p>
      </header>
      <div className="jobDesc">
        <p className="jobSkills">
          Used: Leadership, Organization, Hiring
        </p>
        <p className="jobPoints">
          <li><b>Interviewing</b>, <b>hiring</b> and <b>on-boarding</b> Team Leads for the 2024-25 season.</li>
          <li>Expanding the projects division by <b>40%</b>, and orchestrating a <b>team of 30+</b> to deliver highly advanced, impactful projects.</li>
          <li>Work with other members of MacAI leadership to leverage a <b>~$4,000</b> budget to bring MacAI teams to CUCAI 2025.</li>
        </p>
      </div>
      <header>
        <h3 className="jobTitle">Information Technology</h3>
        <p className="companyName">Callander Lakeside Medical Clinic</p>
      </header>
      <div className="jobDesc">
        <p className="jobSkills">
          Used: IT Systems, Operating Systems, IT Protocols
        </p>
        <p className="jobPoints">
          <li><b>Standardized</b> Operating Systems and programs installed on all computers.</li>
          <li>Created new procedures for computer on-boarding, increasing efficiency of setup by <b>3x</b>.</li>
          <li>Integrated <b>novel devices</b> into the system & <b>created surrounding protocol</b>.</li>
        </p>
      </div>
    </>
  );
}

