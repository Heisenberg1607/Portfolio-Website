import React, { useState, useEffect } from "react";
import ContactLogos from "@/UI/Contact/ContactLogos";
import CalendlySection from "@/UI/Contact/CalendlySection";
// import "../globals.css";

function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the left-to-right animation on component mount
  }, []);

  return (
    <div
      className={`contact-section transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-y-5 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <h1 className="text-3xl border-gray-500">Contact</h1>
      <p className="mt-3">
        Feel free to get in touch and let&apos;s have a discussion about how we
        can work together.
      </p>
      <hr className="mt-5 border-t-1 border-gray-300"></hr>
      <ContactLogos />
      <hr className="mt-5 border-t-1 border-gray-300"></hr>
      <h1 className="text-2xl my-5">Book a call</h1>
      <CalendlySection />
    </div>
  );
}

export default ContactSection;
