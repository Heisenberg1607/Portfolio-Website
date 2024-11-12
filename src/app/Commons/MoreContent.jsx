"use client"

import React from 'react';

function MoreContent({ responsibilities }) {
  return (
    <ul className="text-gray-400 list-disc ml-6">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  );
}

export default MoreContent;
