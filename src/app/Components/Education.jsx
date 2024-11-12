import React from 'react'
import EducationCard from '../Commons/EducationCard';

function Education() {
  return (
    <div>
        <h1 className="text-3xl mt-5">Education</h1>
        <p className="my-2 text-gray-500">My academic journey...</p>
        <hr></hr>
        
        <EducationCard icon={"California_State_University,_Fullerton_seal.svg"}name={"California State University, Fullerton"} course={"Computer Science"} duration={"2024-2026" } degree={"Masters of Science"} location={"Fullerton, California 🇺🇸"}></EducationCard>
        <EducationCard icon={"Savitribai_Phule_Pune_University_Logo.png"} name={"SavitriBai Phule Pune University"} course={"Computer Science"} duration={"2021-2024" } degree={"Bachelor of Engineering"} location={"Pune, India 🇮🇳"} ></EducationCard>
    </div>
  )
}

export default Education