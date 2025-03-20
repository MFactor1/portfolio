import React from 'react'

import ascomdemo1 from '../assets/images/buttons.gif'
import ascomdemo2 from '../assets/images/keyboard.gif'
import stdemo1 from '../assets/images/SearchDemo.gif'
import stdemo2 from '../assets/images/FilterDemo.gif'
import noteflowdemo from '../assets/images/noteflow_demo.webp'
import hhdemo1 from '../assets/images/GameplayShowcase.gif'
import hhdemo2 from '../assets/images/MenuShowcase.gif'
import iedemo from '../assets/images/Explorer.png'

import Collapsible from '../components/Collapsible'
import ScrollFade from '../components/ScrollFade'
import {useProjectsState, ProjectsProvider} from '../components/ProjectsContext'

export default function Projects() {
  return (
    <ProjectsProvider>
      <ProjectGAC projectId='2'/>
      <ProjectNoteFlow projectId='3' />
      <ProjectPortfolio projectId='4' />
      <ProjectIslandExplorer projectId='5' />
      <ProjectSpotify projectId='6' />
      <ProjectHellHunter projectId='7' />
      <ProjectMazeSolver projectId='8' />
      <ProjectAccCom projectId='1' />
    </ProjectsProvider>
  );
}

function ProjectGAC({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/git-auto-commiter" target="_blank">GAC (git-auto-committer)</a>
          <p className="projectSkills">Built With: Python, gevent, rpm, dpkg</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Powerful, automated, repository management. Hidden behind a simple <b>CLI</b>.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p className="projectDescFirstLine">
              Available for <b>Fedora</b> systems as an <b>RPM package</b>, and for <b>Debian</b> (and derivatives) as a <b>DEB package</b>.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              Students around the world use Git to manage academic projects, where frequent commits are often required
              to maintain academic integrity. git-auto-commiter (GAC) is a CLI tool created by students, for students,
              to promote transparency throughout the academic process. GAC automates the creation of consistent, traceable,
              and reliable commits at scheduled intervals, allowing students to focus on their work without manual interruptions.
              By automatically committing on behalf of the user, GAC provides a clear record of project progress over time.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              GAC gives students peace of mind, knowing they don’t need to worry about frequent manual commits, while
              instructors benefit from a detailed history of the students' work, readily available for review. With the
              ability to track multiple repositories simultaneously each with their own commit schedule, GAC can handle all
              your projects at once, while only making new commits on the repositories that actually have changes.
            </p>
          </ScrollFade>
        </div>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectAccCom({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/accessibility-communicator" target="_blank">ClearSignal</a>
          <p className="projectSkills">Built With: Python, kivy</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Making communication more accessible for those in their <b>greatest time of need</b>.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p className="projectDescFirstLine">
              During a routine surgery, my aunt suffered a severe stroke, leaving her unable to speak or communicate effectively
              during the initial stages of her recovery. During a visit, I recognized an opportunity to leverage my skills to create a
              solution that could help her express both basic needs and complex ideas. Within a week, while managing my academic
              responsibilities, I developed ClearSignal— a redistributable application packaged as an executable file (EXE) and deployed on her laptop.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              ClearSignal leverages a compact keypad with three distinctively textured keys to interface with its system. These keys
              correspond to three customizable actions (defaulted to "Yes," "No," and "Custom") and provide access to a virtual keyboard
              for typing. The application offers full customization of colors and text through an easily editable INI file, ensuring adaptability
              to individual user preferences and needs.
            </p>
          </ScrollFade>
        </div>
        <ScrollFade>
          <div className="imgPanel">
            <img src={ascomdemo1} alt="Buttons in Accessibility Communicator" style={{maxHeight: '25vh', maxWidth: '40vw'}}/>
            <img src={ascomdemo2} alt="Keyboard in Accessibility Communicator" style={{maxHeight: '25vh', maxWidth: '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectNoteFlow({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/McMasterAI/NoteFlow" target="_blank">NoteFlow</a>
          <p className="projectSkills">Built With: Python, spaCy, TextRank Algorithm, open source transformer models</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Intelligent, offline, text summarization. Created as a part of McMaster AI Society; presented at CUCAI 2024.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="projectDesc">
            <p className="projectDescFirstLine">
              NoteFlow was my brain-child during my time as Team Lead at McMaster AI Society. It is an <b>entirely offline</b> text
              summarizer targeted at students in order to help create personal notes, cheat sheets, and parse through textbooks.
              The primary differentiating factor for NoteFlow was its ability to run entirely offline, which gives it <b>unparalleled
              reliability</b> when a connection is uncertain, and total data privacy as <b>no data ever leaves your device.</b>
            </p>
          </div>
        </ScrollFade>
        <ScrollFade>
          <div className="imgPanel">
            <img src={noteflowdemo} alt="Summary demo using NoteFlow" style={{maxHeight: '33vh', maxWidth: '90vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectPortfolio({ projectId }) {
  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/portfolio" target="_blank">Portfolio (This one!)</a>
          <p className="projectSkills">Built With: JavaScript, React.JS, HTML/CSS</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            Showcasing my experience, projects, and skills.
          </p>
        </div>
      </ScrollFade>
    </>
  );
}

function ProjectSpotify({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;
  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <p className="projectTitleNoLink">Spotify Tools</p>
          <p className="projectSkills">Built With: Python, kivy, Spotify API</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Automated playlist creation with search and filters.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="projectDesc">
            <p className="projectDescFirstLine">
              Spotify Playlist Tools is an integration with the Spotify API written in Python using the Kivy GUI library.
              It allows users to automate playlist creation for their favorite artists, while having the option to filter out
              potentially unwanted types of songs.
            </p>
          </div>
        </ScrollFade>
        <ScrollFade>
          <div className="imgPanel">
            <img src={stdemo1} alt="Demo of search function in Spotify Tools" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
            <img src={stdemo2} alt="Demo of filter function in Spotify Tools" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectHellHunter({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <p className="projectTitleNoLink">Hell's Hunters</p>
          <p className="projectSkills">Built With: Python, pyglet</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            A simplistic, highscore-based, 2D arcade-style game. Highschool CS Project.
          </p>
        </div>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="imgPanel">
            <img src={hhdemo2} alt="Demo of menu in Hell's Hunters" style={{maxHeight: '31vh', maxWidth: '40vw'}}/>
            <img src={hhdemo1} alt="Demo of gameplay in Hell's Hunters" style={{maxHeight: '31vh', maxWidth: '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectIslandExplorer({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href='https://github.com/2AA4-W24/a2-rescue-mission-team-103' target='_blank'>Island Explorer</a>
          <p className="projectSkills">Built With: Java, JUnit, Maven, Sonarqube</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            An automated rescue drone built in Java that searches an island for survivors, developed in a simulation with randomly generated islands.
          </p>
        </div>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="imgPanel">
            <img src={iedemo} alt="Map exporation performed by Island Explorer" style={{maxHeight: '40vh', maxWidth: '90vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectMazeSolver({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href='https://github.com/2AA4-W24/a3-maze-runner-take-two-MFactor1' target='_blank'>Maze Solver</a>
          <p className="projectSkills">Built With: Java, JUnit, Maven, Sonarqube</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            An automated maze solver built in Java with the choice between a graph-based DFS algorithm, and a primitive right-hand algorithm.
          </p>
        </div>
      </ScrollFade>
    </>
  );
}
