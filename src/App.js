import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext, useContext, useState, useRef, useEffect} from 'react';
import pfp from './assets/images/WebsitePfp.png'
import ascomdemo1 from './assets/images/buttons.gif'
import ascomdemo2 from './assets/images/keyboard.gif'
import stdemo1 from './assets/images/SearchDemo.gif'
import stdemo2 from './assets/images/FilterDemo.gif'
import noteflowdemo from './assets/images/noteflow_demo.webp'
import hhdemo1 from './assets/images/GameplayShowcase.gif'
import hhdemo2 from './assets/images/MenuShowcase.gif'
import iedemo from './assets/images/Explorer.svg'

const ProjectsContext = createContext();
export const useProjectsState = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <ProjectsContext.Provider value={{ expandedProject, toggleProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

const Collapsible = ({ children, isExpanded, duration = 500 }) => {
  const contentRef = useRef(null);

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [children]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpanded ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isExpanded, contentHeight]);

  return (
    <div
      ref={contentRef}
      style={{
        overflow: 'hidden',
        transition: `max-height ${duration}ms ease`,
        maxHeight: '0px',
        marginTop: '0px',
        marginBottom: '0px'
      }}
    >
      {children}
    </div>
  );
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isDeviceMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    const handleResize = () => {
      setIsMobile(isDeviceMobile && window.innerWidth < 1900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

function Home() {
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

function Experience() {
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

function Projects() {
  return (
    <ProjectsProvider>
      <ProjectAccCom projectId='1' />
      <ProjectGAC projectId='2'/>
      <ProjectNoteFlow projectId='3' />
      <ProjectPortfolio projectId='4' />
      <ProjectIslandExplorer projectId='5' />
      <ProjectSpotify projectId='6' />
      <ProjectHellHunter projectId='7' />
      <ProjectMazeSolver projectId='8' />
    </ProjectsProvider>
  );
}

function ProjectGAC({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <header className="projectHeader">
        <a className="projectTitle" href="https://github.com/MFactor1/git-auto-commiter" target="_blank">GAC (git-auto-committer)</a>
        <p className="projectSkills">Built With: Python, gevent, rpm, dpkg</p>
      </header>
      <p className="projectSummary">
        Powerful, automated, repository management. Hidden behind a simple <b>CLI</b>.
      </p>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <p className="projectDescFirstLine">
            Available for <b>Fedora</b> systems as an <b>RPM package</b>, and for <b>Debian</b> (and derivatives) as a <b>DEB package</b>.
          </p>
          <p>
            Students around the world use Git to manage academic projects, where frequent commits are often required
            to maintain academic integrity. git-auto-commiter (GAC) is a CLI tool created by students, for students,
            to promote transparency throughout the academic process. GAC automates the creation of consistent, traceable,
            and reliable commits at scheduled intervals, allowing students to focus on their work without manual interruptions.
            By automatically committing on behalf of the user, GAC provides a clear record of project progress over time.
          </p>
          <p>
            GAC gives students peace of mind, knowing they don’t need to worry about frequent manual commits, while
            instructors benefit from a detailed history of the students' work, readily available for review. With the
            ability to track multiple repositories simultaneously each with their own commit schedule, GAC can handle all
            your projects at once, while only making new commits on the repositories that actually have changes.
          </p>
        </div>
      </Collapsible>
      <span className="showMore" onClick={() => toggleProject(projectId)}>
        {isExpanded ? 'Show Less' : '-> Show More'}
      </span>
    </>
  );
}

function ProjectAccCom({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <header className="projectHeader">
        <a className="projectTitle" href="https://github.com/MFactor1/accessibility-communicator" target="_blank">ClearSignal</a>
        <p className="projectSkills">Built With: Python, kivy</p>
      </header>
      <p className="projectSummary">
        Making communication more accessible for those in their <b>greatest time of need</b>.
      </p>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <p className="projectDescFirstLine">
          During a routine surgery, my aunt suffered a severe stroke, leaving her unable to speak or communicate effectively
          during the initial stages of her recovery. During a visit, I recognized an opportunity to leverage my skills to create a
          solution that could help her express both basic needs and complex ideas. Within a week, while managing my academic
          responsibilities, I developed ClearSignal— a redistributable application packaged as an executable file (EXE) and deployed on her laptop.
          </p>
          <p>
          ClearSignal leverages a compact keypad with three distinctively textured keys to interface with its system. These keys
          correspond to three customizable actions (defaulted to "Yes," "No," and "Custom") and provide access to a virtual keyboard
          for typing. The application offers full customization of colors and text through an easily editable INI file, ensuring adaptability
          to individual user preferences and needs.
          </p>
        </div>
        <div className="imgPanel">
          <img src={ascomdemo1} alt="Buttons in Accessibility Communicator" style={{maxHeight: '25vh', maxWidth: '40vw'}}/>
          <img src={ascomdemo2} alt="Keyboard in Accessibility Communicator" style={{maxHeight: '25vh', maxWidth: '40vw'}}/>
        </div>
      </Collapsible>
      <span className="showMore" onClick={() => toggleProject(projectId)}>
        {isExpanded ? 'Show Less' : '-> Show More'}
      </span>
    </>
  );
}

function ProjectNoteFlow({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <header className="projectHeader">
        <a className="projectTitle" href="https://github.com/McMasterAI/NoteFlow" target="_blank">NoteFlow</a>
        <p className="projectSkills">Built With: Python, spaCy, TextRank Algorithm, open source transformer models</p>
      </header>
      <p className="projectSummary">
        Intelligent, offline, text summarization. Created as a part of McMaster AI Society; presented at CUCAI 2024.
      </p>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <p className="projectDescFirstLine">
            NoteFlow was my brain-child during my time as Team Lead at McMaster AI Society. It is an <b>entirely offline</b> text
            summarizer targeted at students in order to help create personal notes, cheat sheets, and parse through textbooks.
            The primary differentiating factor for NoteFlow was its ability to run entirely offline, which gives it <b>unparalleled
            reliability</b> when a connection is uncertain, and total data privacy as <b>no data ever leaves your device.</b>
          </p>
        </div>
        <div className="imgPanel">
          <img src={noteflowdemo} alt="Summary demo using NoteFlow" style={{maxHeight: '33vh', maxWidth: '90vw'}}/>
        </div>
      </Collapsible>
      <span className="showMore" onClick={() => toggleProject(projectId)}>
        {isExpanded ? 'Show Less' : '-> Show More'}
      </span>
    </>
  );
}

function ProjectPortfolio({ projectId }) {
  return (
    <>
      <header className="projectHeader">
        <a className="projectTitle" href="https://github.com/MFactor1/portfolio" target="_blank">Portfolio (This one!)</a>
        <p className="projectSkills">Built With: JavaScript, React.JS, HTML/CSS, Node.JS</p>
      </header>
      <div className="projectDesc">
        <p>
          Showcasing my experience, projects, and skills.
        </p>
      </div>
    </>
  );
}

function ProjectSpotify({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;
  return (
    <>
      <header className="projectHeader">
        <p className="projectTitleNoLink">Spotify Tools</p>
        <p className="projectSkills">Built With: Python, kivy, Spotify API</p>
      </header>
      <p className="projectSummary">
        Automated playlist creation with search and filters.
      </p>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <p className="projectDescFirstLine">
            Spotify Playlist Tools is an integration with the Spotify API written in Python using the Kivy GUI library.
            It allows users to automate playlist creation for their favorite artists, while having the option to filter out
            potentially unwanted types of songs.
          </p>
        </div>
        <div className="imgPanel">
          <img src={stdemo1} alt="Demo of search function in Spotify Tools" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
          <img src={stdemo2} alt="Demo of filter function in Spotify Tools" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
        </div>
      </Collapsible>
      <span className="showMore" onClick={() => toggleProject(projectId)}>
        {isExpanded ? 'Show Less' : '-> Show More'}
      </span>
    </>
  );
}

function ProjectHellHunter({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <header className="projectHeader">
        <p className="projectTitleNoLink">Hell's Hunters</p>
        <p className="projectSkills">Built With: Python, pyglet</p>
      </header>
      <div className="projectDesc">
        <p>
          A simplistic, highscore-based, 2D arcade-style game. Highschool CS Project.
        </p>
      </div>
      <Collapsible isExpanded={isExpanded}>
        <div className="imgPanel">
          <img src={hhdemo2} alt="Demo of menu in Hell's Hunters" style={{maxHeight: '31vh', maxWidth: '40vw'}}/>
          <img src={hhdemo1} alt="Demo of gameplay in Hell's Hunters" style={{maxHeight: '31vh', maxWidth: '40vw'}}/>
        </div>
      </Collapsible>
      <span className="showMore" onClick={() => toggleProject(projectId)}>
        {isExpanded ? 'Show Less' : '-> Show More'}
      </span>
    </>
  );
}

function ProjectIslandExplorer({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <header className="projectHeader">
        <a className="projectTitle" href='https://github.com/2AA4-W24/a2-rescue-mission-team-103' target='_blank'>Island Explorer</a>
        <p className="projectSkills">Built With: Java, JUnit, Maven, Sonarqube</p>
      </header>
      <div className="projectDesc">
        <p>
          An automated rescue drone built in Java that searches an island for survivors, developed in a simulation with randomly generated islands.
        </p>
      </div>
      <Collapsible isExpanded={isExpanded}>
        <div className="imgPanel">
          <img src={iedemo} alt="Map exporation performed by Island Explorer" style={{maxHeight: '40vh', maxWidth: '90vw'}}/>
        </div>
      </Collapsible>
      <span className="showMore" onClick={() => toggleProject(projectId)}>
        {isExpanded ? 'Show Less' : '-> Show More'}
      </span>
    </>
  );
}

function ProjectMazeSolver({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <header className="projectHeader">
        <a className="projectTitle" href='https://github.com/2AA4-W24/a3-maze-runner-take-two-MFactor1' target='_blank'>Maze Solver</a>
        <p className="projectSkills">Built With: Java, JUnit, Maven, Sonarqube</p>
      </header>
      <div className="projectDesc">
        <p>
          An automated maze solver built in Java with the choice between a graph-based DFS algorithm, and a primitive right-hand algorithm.
        </p>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <div>
        <p className='skillsTitle'>
          What we're working with:
        </p>
        <p className='skillItem'>
          <b><i>Languages:</i></b> Python, Java, JavaScript, C/C++, Bash Script, SQL, HTML/CSS, LaTeX.
        </p>
        <p className='skillItem'>
          <b><i>Frameworks/Libraries:</i></b> React.JS, Node.JS, gevent, kivy, OpenCV, spaCy, JUnit, unittest.
        </p>
        <p className='skillItem'>
          <b><i>Tools:</i></b> git, Linux, Docker, Jenkins, Jira, MS Office, Azure Blob Storage, GCS, Amazon S3, Make, rpm, dpkg, UML, Sonarqube.
        </p>
      </div>
    </>
  );
}

export default function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Router>
        <header className="headerbar">
          <h1 className="title" style={{ textAlign: isMobile ? "center" : "left" }}>Matthew Nesbitt</h1>
          <nav className="navbar" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left"}}>
            <Link to="/" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Home</Link>
            <Link to="/experience" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Experience</Link>
            <Link to="/projects" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Projects</Link>
            <Link to="/skills" style={{ marginRight: isMobile ? "0px" : "20px" }}>{ isMobile ? "" : "-> " }Skills</Link>
          </nav>
        </header>
        <main className="bodypages" style={{ marginLeft: isMobile ? "0px" : "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </Router>
      <footer>
        <hr />
        <div className="footerContent">
          <nav className="footerLinks">
            <a href="https://www.linkedin.com/in/matthewnesbitt8" target="_blank">-> LinkedIn</a>
            <a href="https://www.github.com/MFactor1" target="_blank">-> GitHub</a>
            <a href="https://drive.google.com/file/d/1ToSrtCD4D2AOzss_RZWrOOEa_E64Ss63/view?usp=sharing" target="_blank">-> Resume</a>
          </nav>
          <div className="credits">
            <span>Matthew Nesbitt 2024</span>
          </div>
        </div>
      </footer>
    </>
  );
}
