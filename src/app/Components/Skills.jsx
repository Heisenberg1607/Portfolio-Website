"use client"

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

function Skills({scrollSpeed=60, reverse = false}) {

    const skills = [
        { name: 'React.js', icon: 'react.svg' },
        { name: 'CSS', icon: 'css-3.svg' },
        { name: 'TailwindCSS', icon: 'tailwindcss-icon.svg' },
        { name: 'OpenAI', icon: 'openai-icon.svg' },
        { name: 'Next.js', icon: 'nextjs-icon.svg' },
        { name: 'Node.js', icon: 'nodejs-icon.svg' },
        { name: 'TypeScript', icon: 'typescript-icon-round.svg' },
        { name: 'Unity3D', icon: 'unity.svg' },
        { name: 'Github', icon: 'github-icon.svg' },
        { name: 'Javascript', icon: 'javascript.svg' },
        { name: 'Solidity', icon: 'solidity.svg' },
        { name: 'Java', icon: 'java.svg' },
        { name: 'Python', icon: 'python.svg' },
        { name: 'Springboot', icon: 'spring-icon.svg' },
        { name: 'MySQL', icon: 'mysql-icon.svg' },
    ];

  return (
    <div className="overflow-hidden relative w-full">
      {/* Faded overlay on the left */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-900 via-gray-900/0 to-transparent z-10"></div>

      {/* Faded overlay on the right */}
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-900 via-gray-900/0 to-transparent z-10"></div>

      <motion.div
        className="flex space-x-4 py-4"
        initial={{ x: reverse ? 0 : -1000 }}
        animate={{ x: reverse ? -1000 : 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollSpeed,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full text-white border border-gray-600/40 shadow-md 
                      max-500:px-2 max-500:py-1 max-500:text-xs"
          >
            <div className="w-4 h-4 max-500:w-3 max-500:h-3">
              <Image alt="logo" src={`/icons/${skill.icon}`} width={24} height={24} />
            </div>
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
