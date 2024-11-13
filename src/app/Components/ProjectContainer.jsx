import React, { useState, useEffect } from 'react';
import "../globals.css";
import ProjectCard from "../Commons/ProjectCard";
import { PROJECTSLIST } from "../constant/projects_data.js"; 

function ProjectContainer() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation on component mount
  }, []);

  return (
    <div 
      className={`display-flex flex-col max-w-3xl contact-section transition-transform duration-1000 ease-in-out ${
        isVisible ? 'translate-y-5 opacity-100' : 'translate-y-full opacity-0'
      } p-4 md:p-8 max-500:p-0 max-500:pd-5`}
    >
      <h1 className="font-medium text-2xl md:text-3xl mb-3 text-gray-200">Projects</h1>
      <p className="mb-3 text-gray-500 text-sm md:text-base">Here are some projects I worked on...</p>
      <hr />
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 transition-transform duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {PROJECTSLIST.projects.map((project,index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
