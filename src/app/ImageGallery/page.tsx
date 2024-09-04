"use client";
import React, { useEffect, useRef, useState } from "react";
import IGModal from "../Components/IGModal";

const ImageGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [arrofImg, setarrofImg] = useState<Array<string>>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const images = localStorage.getItem("arrofImg");
      setarrofImg(images ? JSON.parse(images) : []);
    }
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [arrofImg]);

  const handleAddImage = () => setIsOpen(true);

  const buttonClasses = "lg:p-[1.8vw] md:p-[3vw] max-sm:p-[6vw] bg-[#40464D] lg:w-full max-sm:w-[80%] rounded-full focus:outline-none transition-all duration-500";
  const textClasses = "font-[Poppins] text-white font-extrabold max-sm:text-sm max-[375px]:text-xs";
  const headerStyle = "w-[40%] lg:w-1/3 rounded-full p-6 bg-[#171717eb] max-sm:hidden";
  const boxShadowStyle = { boxShadow: "10px 4px 20px #1a1c1f,-8px -4px 20px #66707b" };
  const scrollBoxShadow = { boxShadow: "12px 4px 20px #1a1c1f,-8px -4px 20px #66707b" };
  const imgBoxShadow = { boxShadow: "16px 16px 55px #111316, -16px -16px 55px #3d454c" };

  return (
    <div className="h-[48vh] w-full bg-[#272C31] relative rounded-3xl">
      <div className="header h-[20vh] w-full flex items-center p-3 z-10 justify-between max-sm:justify-center gap-3">
        <div className={headerStyle} style={{ boxShadow: "inset 5px 5px 8px #090909,inset -5px -5px 8px #252525" }}>
          <h1 className="font-[Poppins] text-center text-2xl text-white">Gallery</h1>
        </div>
        <div className="flex items-center justify-evenly gap-6">
          <button className={buttonClasses} style={boxShadowStyle} onClick={handleAddImage} aria-label="Add Image">
            <h1 className={textClasses}>+ ADD IMAGE</h1>
          </button>
          <button className="rounded-full p-3  bg-[#282B2F]" style={scrollBoxShadow} aria-label="Previous Image">
            <svg fill="#abb0b5" width="45px" height="45px" viewBox="0 0 256 256">
              <path d="M220,128a4.0002,4.0002,0,0,1-4,4H49.65674l65.17138,65.17187a3.99957,3.99957,0,1,1-5.65625,5.65625l-72-72a3.99854,3.99854,0,0,1,0-5.65625l72-72a3.99957,3.99957,0,0,1,5.65625,5.65625L49.65674,124H216A4.0002,4.0002,0,0,1,220,128Z"></path>
            </svg>
          </button>
          <button className="rounded-full p-3 bg-[#282B2F]" style={scrollBoxShadow} aria-label="Next Image">
            <svg fill="#abb0b5" width="45px" height="45px" viewBox="0 0 256 256" transform="rotate(180)">
              <path d="M220,128a4.0002,4.0002,0,0,1-4,4H49.65674l65.17138,65.17187a3.99957,3.99957,0,1,1-5.65625,5.65625l-72-72a3.99854,3.99854,0,0,1,0-5.65625l72-72a3.99957,3.99957,0,0,1,5.65625,5.65625L49.65674,124H216A4.0002,4.0002,0,0,1,220,128Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div ref={scrollContainerRef} className="body w-full pb-5 p-2 rounded-3xl">
        {isOpen && <IGModal setIsOpen={setIsOpen} setArrOfImg={setarrofImg} arrOfImg={arrofImg} />}
        <div className="max-w-full flex-wrap flex items-center justify-evenly gap-10 max-h-[25vh] overflow-y-auto pb-5 scrollbar-thin scrollbar-track-[#272C31] scrollbar-thumb-neutral-900 rounded-3xl">
          {arrofImg.map((elem, index) => (
            <img key={index} className="object-cover rounded-3xl w-56" src={elem} alt={`Image ${index + 1}`} style={imgBoxShadow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
