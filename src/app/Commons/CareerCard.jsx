"use client"

import React from 'react';
import Image from 'next/image';
import {useState} from "react";
import MoreContent from "../Commons/MoreContent";

function JobCard({ jobTitle, companyName, location, startDate, endDate, duration, type, workMode, logoSrc,responsibilities }) {

  const [showMore, setShowMore] = useState(false);
 
  return (
    <div className="flex bg-gray-900 text-white p-5 rounded-lg my-6 shadow-lg max-500:flex-col ">
      {/* Left Side: Logo */}
      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-6">
        {logoSrc && (
          <Image alt={`${companyName} logo`} src={logoSrc} width={48} height={48} className="rounded-full" />
        )}
      </div>

      {/* Right Side: Job Information */}
      <div className="flex-1 ">
        <div className="flex sm:flex-col sm:justify-between items-start max-500:flex-col">
          <div className="job-info mb-2 sm:mb-0 gap-2">
            <h3 className="text-xl ">{jobTitle}</h3>
            <p className="text-gray-400 text-sm">{companyName} • {location}</p>
          </div>
          <div className="flex gap-3 text-gray-400 text-sm max-500:flex-col">
            <p>{startDate} - {endDate}</p>
            <span className='hidden'>•</span>
            <p>{duration}</p>
            <span className='hidden'>•</span>
            <p>{type}</p>
            <span className='hidden'>•</span>  
            <p>{workMode}</p>
          </div>
        </div>
        <button className="mt-3 text-gray-400 text-sm hover:text-white" onClick={() => setShowMore(!showMore)}>
          &gt; {showMore ? 'Hide Responsibilities' : 'Show Responsibilities'}
        </button>

        <div 
          
          className={`transition-all duration-1000 ease-in-out overflow-hidden ${showMore ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {showMore && <MoreContent responsibilities={responsibilities} />}
        </div>

        
      </div>
    </div>
  );
}

export default JobCard;
