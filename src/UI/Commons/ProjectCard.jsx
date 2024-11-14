// import React from 'react';

// function ProjectCard() {
//   return (
//     <div className="max-w-sm mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden text-white transform transition duration-1000  hover:scale-105"> 
//       {/* Featured Badge */}
//       <div className="relative">
//         <img
//           className="w-full h-48 object-cover"
//           src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
//           alt="Project Image"
//         />
//         <span className="absolute top-4 right-4 bg-green-400 text-black px-3 py-1 text-xs font-semibold rounded-md">
//           Featured
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h2 className="text-lg font-semibold">Socrative - Smart AI Teacher</h2>
//         <p className="mt-2 text-sm text-gray-400">
//           AI-powered knowledge testing platform with interactive dialogue, personalized testing, and deep learning experiences for students.
//         </p>

//         {/* Technologies Icons */}
//         <div className="flex my-4 space-x-2">
//           <img src="/icons/nextjs-icon.svg" alt="Icon 1" className="w-6 h-6" />
//           <img src="/icons/html-5.svg" alt="Icon 2" className="w-6 h-6" />
//           <img src="/icons/css-3.svg" alt="Icon 3" className="w-6 h-6" />
//           <img src="/icons/tailwindcss-icon.svg" alt="Icon 3" className="w-6 h-6" />
//           <img src="/icons/javascript.svg" alt="Icon 3" className="w-6 h-6" />
//           <img src="/icons/solidity.svg" alt="Icon 3" className="w-6 h-6" />
//           <img src="/icons/spring-icon.svg" alt="Icon 3" className="w-6 h-6" />
//           {/* Add more icons as needed */}
//         </div>

        
        
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

"use client"

import React from 'react';

function ProjectCard({ project }) {

  // console.log(project);

  return (
    <div className="max-w-sm mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden text-white transform transition duration-1000 hover:scale-105">
      {/* Featured Badge */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={project.image}
          alt={`${project.title} Image`}
        />
        {project.is_featured && (
          <span className="absolute top-4 right-4 bg-green-400 text-black px-3 py-1 text-xs font-semibold rounded-md">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="mt-2 text-sm text-gray-400">{project.description}</p>

        {/* Technologies Icons */}
        <div className="flex my-4 space-x-2">
          {project.stacks.map((stack, index) => {
            // Mapping stack names to corresponding icon filenames
            let iconName = '';
            switch (stack.toLowerCase()) {
              case 'react.js':
              case 'react':
                iconName = 'react.svg';
                break;
              case 'javascript':
                iconName = 'javascript.svg';
                break;
              case 'java':
                iconName = 'java.svg';
                break;
              case 'python':
                iconName = 'python.svg';
                break;
              case 'css':
              case 'css3':
                iconName = 'css-3.svg';
                break;
              case 'html5':
              case 'html':
                iconName = 'html-5.svg';
                break;
              case 'next.js':
              case 'nextjs':
                iconName = 'nextjs-icon.svg';
                break;
              case 'spring':
                iconName = 'spring-icon.svg';
                break;
              case 'solidity':
                iconName = 'solidity.svg';
                break;
              case 'tailwind':
              case 'tailwindcss':
                iconName = 'tailwindcss-icon.svg';
                break;
              case 'firebase':
                iconName = 'firebase.svg';
                break;
              case 'material-ui':
                iconName = 'material-ui.svg';
                break;
                
              // Add more cases if needed
              default:
                iconName = '';
            }

            // Render icon only if iconName is matched
            return iconName ? (
              <img
                key={index}
                src={`/Icons/${iconName}`}
                alt={`${stack} Icon`}
                className="w-6 h-6"
              />
            ) : null;
          })}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.link_demo && (
            <a
              href={project.link_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Demo
            </a>
          )}
          {project.link_github && project.link_github !== '#' && (
            <a
              href={project.link_github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

