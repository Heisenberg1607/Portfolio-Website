// import React, { useState, useEffect } from 'react';

import "@/UI/Styles/Hero.css";
import Navigation from "@/UI/Commons/Navigation.jsx";
import AboutContainer from "@/UI/Components/AboutContainer";

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
