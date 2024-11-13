import React from "react";
import Image from "next/image";
// import Google from "/Icons/google-gmail.svg";

function ContactLogos() {
  return (
    <div className=" my-6">
      <h2 className="text-white text-2xl font-semibold mb-4">
        Find me on social media
      </h2>
      <div className="flex justify-center space-x-4 max-500:flex-col max-500:items-center gap-3">
        {/* Email Button */}
        <a
          href="mailto:athru@csu.fullerton.edu"
          className="w-full flex items-center justify-center w-32 h-12 max-500:ml-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 border border-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Icons/google-gmail.svg"
            alt="Email Icon"
            className="w-5 h-5 mr-2 filter invert"
            width="200"
            height="200"
          />
          Email
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/atharva-kurumbhatte/"
          className="w-full flex items-center justify-center w-32 h-12 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 border border-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Icons/linkedin-icon.svg"
            alt="LinkedIn Icon"
            className="w-5 h-5 mr-2"
          />
          LinkedIn
        </a>

        {/* Twitter Button */}
        <a
          href="https://x.com/AtharvaKur27087"
          className="w-full flex items-center justify-center w-32 h-12 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 border border-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/Icons/x.svg" alt="Twitter Icon" className="w-5 h-5 mr-2" />
          Twitter
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/xtharva01/"
          className="w-full flex items-center text-2xs justify-center w-32 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-md hover:opacity-90 border border-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Icons/instagram-icon.svg"
            alt="Instagram Icon"
            className="w-5 h-5 mr-2"
          />
          Instagram
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/Heisenberg1607"
          className="w-full flex items-center justify-center w-32 h-12 bg-black text-white font-semibold rounded-md hover:bg-gray-800 border border-white "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Icons/github-icon.svg"
            alt="GitHub Icon"
            className="w-5 h-5 mr-2"
          />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ContactLogos;
