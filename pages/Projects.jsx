"use client"

import React from 'react'
import  "../src/app/Styles/Hero.css";
import Navigation from  "../src/app/Commons/Navigation"
import ProjectsContainer from "../src/app/Components/ProjectContainer";


function Projects() {
  return (
    <div className="hero-container">
     <div className="hero-content ">
     <div className="sticky top-0 h-screen p-4 shadow-lg">
          <Navigation />
        </div>
     <ProjectsContainer></ProjectsContainer> 
     </div>
    </div>
  )
}

export default Projects