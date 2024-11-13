"use client";

// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Avatar from '@mui/material/Avatar';
import { Rocket } from "lucide-react";
// import Navigation from "@/UI/Commons/Navigation.jsx";
import "@/UI/Styles/Hero.css"; // Custom CSS for styling
import { useState, useEffect } from "react";
// import "../globals.css";
import Link from "next/link";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    
       
        <div
          className={`contact-section transition-transform duration-1000 ease-in-out p-0 max-w-full text-left ${
            isVisible
              ? "translate-y-5 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <Typography variant="h4" gutterBottom className="name-highlight">
            Hey! This is Atharva
          </Typography>
          <div className="status">
            <ul>
              <li>Born in Pune, India 🇮🇳</li>
              <li>Currently staying in Fullerton, CA 🇺🇸</li>
            </ul>
          </div>
          <Typography variant="h6" className="role-title">
            Full Stack Web Developer ● Software Engineer
          </Typography>
          <Typography variant="body1" className="hero-description">
            Aspiring Software Engineer with a focus on Full Stack development,
            passionate about building pixel-perfect web experiences. With
            hands-on experience from two internships, I’m skilled in JavaScript
            and committed to all aspects of web development. I thrive in
            collaborative environments, working to create efficient, scalable,
            and visually engaging web applications.
          </Typography>
          <hr className="custom-hr" />
          <Typography variant="h6" className="sub-title-home">
            What I&apos;ve been working on
          </Typography>
          <Typography variant="body1" className="hero-description">
            I&apos;m Atharva, an international master&apos;s student at the
            California State University, Fullerton, currently pursuing a degree
            in Computer Science.
          </Typography>
          <div className="work-together-section">
            <Typography variant="h6" className="work-together-title">
              <Rocket /> Let&apos;s Work Together
            </Typography>
            <Typography>
              I&apos;m seeking a Full-Stack Web Developer / Software Engineer
              Internship for Summer 2025. Feel free to email me to see how I can
              contribute.
            </Typography>
            <Link href="/Contacts" passHref>
              <Button variant="contained" className="work-together-btn">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      
  );
}
