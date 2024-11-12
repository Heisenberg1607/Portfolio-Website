// import { Button } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import "../globals.css";
import Link from 'next/link'
import Button from '@mui/material/Button';

function About() {
  return (
    <div className="main-about-section w-3xl">
      <h1 className="text-3xl">About Me</h1>
      <p className="mt-3 text-gray-500">A short story of me, not important but seems better than nothing.</p>

      <hr className='mt-2'/>

      <Link href="https://drive.google.com/file/d/1-S1FXC28CuN6QHgYYztMDxlo1UD7Lc3i/view?usp=drive_link" passHref target="_blank"
  rel="noopener noreferrer">
            <Button variant="outlined" color="primary" className="resume-btn my-3">
              <DownloadIcon/>
              Get my resume
            </Button>
      </Link>
    </div>
  )
}

export default About