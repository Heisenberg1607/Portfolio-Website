"use client";

import React from "react";
import Navigation from "@/app/Commons/Navigation";
import "../Styles/Hero.css";
import ContactSection from "@/app/Components/ContactSection";

function Contacts() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="sticky top-0 h-auto ">
          <Navigation />
        </div>
        <ContactSection />
      </div>
    </div>
  );
}

export default Contacts;
