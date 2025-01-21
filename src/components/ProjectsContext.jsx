import React from 'react'
import { createContext, useContext, useState } from 'react';

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
