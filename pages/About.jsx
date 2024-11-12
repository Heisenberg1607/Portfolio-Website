// import React, { useState, useEffect } from 'react';

import '../src/app/Styles/Hero.css';
import Navigation from "../src/app/Commons/Navigation";
import AboutContainer from '../src/app/Components/AboutContainer';

function About() {
  

  return (
    <div className="hero-container ">
      <div className="hero-content  ">
        
        {/* Left Section */}
        <div className="lg:sticky top-0 lg:w-1/3 max-400:w-full max-400:mb-4">
          <Navigation />
        </div>
        
        {/* Right Section */}
        <AboutContainer></AboutContainer>
        
      </div>
    </div>
  );
}

export default About;
