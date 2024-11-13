import React from 'react'
import Link from "next/link"

function CalendlySection() {
  return (
    <Link href="https://calendly.com/atharva-us0058/30min">
      <div className="max-w-3xl mx-auto p-4 bg-teal-900 rounded-xl border border-teal-500 shadow-lg text-white flex items-center justify-between transition transform hover:scale-105 duration-1000">

<div>
  <h2 className="text-lg font-semibold">1 on 1 Chit-chat Session</h2>
  <p className="text-2sm text-gray-300">Let’s find some time to talk about anything</p>
  

  <div className="flex items-center mt-4 space-x-4">
    <div className="flex items-center space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-3-7a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
      <span>30 Minutes</span>
    </div>
    <div className="flex items-center space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l2 2m-2-2l-2 2m8-6h2a2 2 0 012 2v10a2 2 0 01-2 2h-4m4-12H4a2 2 0 00-2 2v10a2 2 0 002 2h4m4 0h.01" />
      </svg>
      <span>Google Meet</span>
    </div>
  </div>
</div>


<div className="flex items-center justify-center w-12 h-12 rounded-full border border-teal-500 bg-transparent">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-9 4h14m-6 0v6a1 1 0 01-1 1H9a1 1 0 01-1-1v-6" />
  </svg>
</div>
</div>
    </Link>
    
  )
}

export default CalendlySection