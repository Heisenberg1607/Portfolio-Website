"use client";

import React from "react";
import "@/UI/Styles/Hero.css";
import Navigation from "@/UI/Commons/Navigation";
import ProjectsContainer from "@/UI/Components/ProjectContainer";

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
  );
}

export default Projects;
