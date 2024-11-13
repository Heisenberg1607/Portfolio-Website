"use client";

import React from "react";
import Image from "next/image";

function EducationCard(props) {
  return (
    <div className="flex items-center bg-gray-900 text-white p-5 rounded-lg mb-5 shadow-lg my-6 max-500:flex-col  max-500:p-3">
      <div className="w-16 h-16  rounded-full flex items-center justify-center mr-5 max-500:flex max-500:items-center ">
        <Image
          alt="logo"
          src={`/Icons/${props.icon}`}
          width={65}
          height={65}
        ></Image>
      </div>
      <div className="edu-info max-500:text-left max-500:w-full ">
        <h3 className="text-xl text-gray-1000">{props.name}</h3>
        <div className="flex gap-3 text-gray-400 text-sm max-500:flex-col max-500:items-left max-500:gap-2">
          <p>{props.degree}</p>
          <p>{props.course}</p>
        </div>
        <div className="flex gap-3 text-gray-400 text-sm mt-1 max-500:flex-col max-500:items-left max-500:gap-2">
          <p>{props.duration}</p>
          <p>{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
