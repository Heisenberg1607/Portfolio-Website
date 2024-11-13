"use client"

import React, { useState, useEffect } from 'react';
import AboutSection from "./About";
import EducationSection from './Education';
import CareerSection from './Career';
import Skills from './Skills';

function AboutContainer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center w-full transition-transform duration-1000 ease-in-out">
      <div className={`container mx-auto px-4 max-w-4xl ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      } max-400:p-2 max-400:text-sm`}>
        
        <AboutSection className="mb-6 max-400:text-xs max-400:mb-2" />
        <EducationSection className="mb-6 max-400:mb-2" />
        <CareerSection className="mb-6 max-400:mb-2" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl my-5 max-400:text-xl max-400:my-3 text-center sm:text-left">Skills</h1>

        <div className="flex flex-col items-center justify-center max-400:space-y-2">
          <Skills className="max-400:text-xs" />
          <Skills className="max-400:text-xs" reverse />
          <Skills className="max-400:text-xs" />
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
