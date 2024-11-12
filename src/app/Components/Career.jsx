import React from 'react'
import JobCard from '../Commons/CareerCard';

function Career() {
  return (
    <div>
        <h1 className="text-3xl mt-5">Career</h1>
        <p className="my-2 text-gray-500">My Career...</p>
        <hr></hr>
        
        <JobCard
        jobTitle="Tech Lead Intern"
        companyName="Global Vistar" 
        location="Pune, India "
        startDate="March 2023"
        endDate="June 2023"
        duration="4 Months"
        type="Internship"
        workMode="Remote"
        logoSrc="/Icons/global_vistar.png"
        responsibilities={[
            "Led a team of interns to develop a web application using React and Node.js",
            "Established virtual microphone and speaker systems using Windows audio samples, WDK, and WSDK",
            "Implemented CI/CD pipelines to automate testing and deployment",
          ]}
      />
      
      <JobCard
        jobTitle="Software Developer Intern"
        companyName="FairShare IT Services"
        location="Pune, India 🇮🇳"
        startDate="Aug 2023"
        endDate="Nov 2023"
        duration="4 Months"
        type="Internship"
        workMode="Hybrid"
        logoSrc="/Icons/fairshare.webp"
        responsibilities={[
            "Led a team of interns to develop a web application using React and Node.js",
            "Established virtual microphone and speaker systems using Windows audio samples, WDK, and WSDK",
            "Implemented CI/CD pipelines to automate testing and deployment",
          ]}
      />
    </div>
  )
}

export default Career