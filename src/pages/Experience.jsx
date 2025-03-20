import React from 'react'

import ScrollFade from '../components/ScrollFade'

export default function Experience() {
  return (
    <>
      <ScrollFade>
        <header>
          <h3 className="jobTitle">Software Design Engineer - Intern</h3>
          <p className="companyName">Evertz Microsystems</p>
        </header>
      </ScrollFade>
      <div className="jobDesc">
        <ScrollFade>
          <p className="jobSkills">
            Used: Python, Gevent, Jenkins, Linux, MAKE, Jira, GCS, Amazon S3, Azure Blob Storage
          </p>
        </ScrollFade>
        <div className="jobPoints">
          <ScrollFade><li>Helped developed the <b>DreamCatcher</b> live replay system, in-use by <b>major broadcasters across the globe</b>.</li></ScrollFade>
          <ScrollFade><li>Improved average repository build times by over <b>2x</b> by implementing <b>build caching</b> using <b>Docker layers</b>.</li></ScrollFade>
          <ScrollFade><li>Direct-to-cloud video export <b>streaming</b> via a <b>FIFO</b> resulting in a <b>13% faster</b> export & upload process.</li></ScrollFade>
          <ScrollFade><li>Implemented a <b>FUSE</b> (Filesystem in Userspace) to tweak <b>FFMPEG's</b> process of writing video files.</li></ScrollFade>
          <ScrollFade><li>Slashed video upload times by over <b>6x</b> to <b>Azure blob storage</b> by <b>chunking</b> & <b>parallelizing</b> file uploads.</li></ScrollFade>
        </div>
      </div>
      <ScrollFade>
        <header>
          <h3 className="jobTitle">Project Lead</h3>
          <p className="companyName">McMaster AI Society</p>
        </header>
      </ScrollFade>
      <div className="jobDesc">
        <ScrollFade>
          <p className="jobSkills">
            Used: Python, spaCy, transformer models
          </p>
        </ScrollFade>
        <div className="jobPoints">
          <ScrollFade><li>Spearheaded NoteFlow, an <b>AI based</b> summarizer using <b>spaCy pipelines</b>, <b>T5 transformers</b>, and the <b>TextRank</b> algorithm.</li></ScrollFade>
          <ScrollFade><li>Contribute to, while also coordinating a tight knit <b>team of 6</b> to work on the development of NoteFlow.</li></ScrollFade>
          <ScrollFade><li>Present <i>NoteFlow</i> at <b>CUCAI 2024</b> (Canadian Undergraduate Conference for AI) in Kingston, Ontario.</li></ScrollFade>
        </div>
      </div>
      <ScrollFade>
        <header>
          <h3 className="jobTitle">Director of Projects</h3>
          <p className="companyName">McMaster AI Society</p>
        </header>
      </ScrollFade>
      <div className="jobDesc">
        <ScrollFade>
          <p className="jobSkills">
            Used: Leadership, Organization, Hiring
          </p>
        </ScrollFade>
        <div className="jobPoints">
          <ScrollFade><li><b>Interviewing</b>, <b>hiring</b> and <b>on-boarding</b> Team Leads for the 2024-25 season.</li></ScrollFade>
          <ScrollFade><li>Expanding the projects division by <b>40%</b>, and orchestrating a <b>team of 30+</b> to deliver highly advanced, impactful projects.</li></ScrollFade>
          <ScrollFade><li>Work with other members of MacAI leadership to leverage a <b>~$4,000</b> budget to bring MacAI teams to CUCAI 2025.</li></ScrollFade>
        </div>
      </div>
      <ScrollFade>
        <header>
          <h3 className="jobTitle">Information Technology</h3>
          <p className="companyName">Callander Lakeside Medical Clinic</p>
        </header>
      </ScrollFade>
      <div className="jobDesc">
        <ScrollFade>
          <p className="jobSkills">
            Used: IT Systems, Operating Systems, IT Protocols
          </p>
        </ScrollFade>
        <div className="jobPoints">
          <ScrollFade><li><b>Standardized</b> Operating Systems and programs installed on all computers.</li></ScrollFade>
          <ScrollFade><li>Created new procedures for computer on-boarding, increasing efficiency of setup by <b>3x</b>.</li></ScrollFade>
          <ScrollFade><li>Integrated <b>novel devices</b> into the system & <b>created surrounding protocol</b>.</li></ScrollFade>
        </div>
      </div>
    </>
  );
}

