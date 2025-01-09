"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  House,
  PhoneCall,
  UserSearch,
  BadgeCheck,
  Menu,
  X,
  Speech,
} from "lucide-react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="right-section max-500:w-fit mt-12 ">
      {/* Navigation bar header with profile picture and hamburger menu */}
      <div className="max-500:flex max-500:flex-row max-500:items-center max-500:justify-between max-500:w-full max-500:p-4 max-500:fixed max-500:top-0 max-500:left-0 max-500:z-50 max-500:bg-[#121212] max-500:border-b max-500:shadow-md ">
        <Image
          alt="Atharva Kurumbhatte"
          src="/Photos/Portfolio-image.jpg"
          // sx={{ width: 400, height: 400 }}
          width="150"
          height="150"
          className="rounded-full object-cover w-40 h-40 max-500:w-16 max-500:h-16 my-3 max-500:my-1 "
        />

        <div className="hamburger-icon md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Navigation content that appears based on menuOpen state */}
      <div
        className={`navigation-content md:block ${
          menuOpen ? "block" : "hidden"
        } max-500:mt-12 max-500:pt-5`}
      >
        <div className="max-500:hidden">
          <Typography
            style={{ fontSize: "1.2rem" }}
            gutterBottom
            className="flex"
          >
            Atharva Kurumbhatte <BadgeCheck className="verified-icon" />
          </Typography>
          <p className="work-title">Software Engineer</p>
        </div>

        {/* Navigation Links */}
        <div className="navigation-bar max-500:pt-3">
          <ul className="nav-links">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <li className="nav-link">
                <House /> <span>Home</span>
              </li>
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <li className="nav-link">
                <UserSearch /> <span>About</span>
              </li>
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              <li className="nav-link">
                <Coffee /> <span>Projects</span>
              </li>
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <li className="nav-link">
                <PhoneCall /> <span>Contact</span>
              </li>
            </Link>
            <Link href="/testimonials" onClick={() => setMenuOpen(false)}>
              <li className="nav-link">
                <Speech /> <span>Testimonials</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* <hr className="custom-hr-2" /> */}
    </div>
  );
}

export default Navigation;
