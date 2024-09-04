"use client"
import React, { useState } from 'react';
import ToggleButton from '../Components/ToggleButton';
import ToggleInfo from '../Components/ToggleInfo';

function Toggle() {

  const [CurrentToggle, setCurrentToggle] = useState(0);
  const ToggleInfoData=[
   "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM."
 ,
   "Working as a Sales Representative at Salesforce involves engaging with clients to understand their needs and demonstrating how Salesforce solutions can drive growth. The role offers extensive training and a collaborative environment that emphasizes innovation and continuous learning. It requires adaptability, a passion for technology."
 ,
   "I highly recommend the Sales Representative role at Salesforce for those passionate about technology and customer engagement. The position offers valuable training, a collaborative work environment, and opportunities for professional growth. It’s a great fit for individuals who are adaptable, goal-oriented, and eager to make an impact in the tech industry"
 
  ]
  return (
    <div className="h-[45vh] w-full  flex items-center md:justify-evenly gap-7 rounded-3xl bg-[#272C31] flex-col p-[1.5vw] max-[320px]:p-[2vw] pb-5 max-sm:pb-3">
      <div
        className="ToggleButton mt-4 sm:mt-0 lg:p-[.5vw]  md:p-[1vw] max-sm:p-[1vw] w-full bg-[#171717] rounded-full flex items-center gap-[.5vw]"
        style={{ boxShadow: "inset 5px 5px 6px #090909, inset -5px -5px 6px #252525" }}
      >
        <ToggleButton 
          label="About Me" 
          isActive={CurrentToggle === 0} 
          onClick={() => setCurrentToggle(0)} 
        />
        <ToggleButton 
          label="Experiences" 
          isActive={CurrentToggle === 1} 
          onClick={() => setCurrentToggle(1)} 
        />
        <ToggleButton 
          label="Recommended" 
          isActive={CurrentToggle === 2} 
          onClick={() => setCurrentToggle(2)} 
        />
      </div>
      <ToggleInfo currentToggleData={ToggleInfoData[CurrentToggle]}/>
    
    </div>
  );
}

export default Toggle;