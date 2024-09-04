import React from 'react';

interface ToggleButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, isActive, onClick }) => {
  const buttonClasses = `lg:p-[1vw] md:p-[1vw] max-sm:p-[2.5vw] ${isActive ? 'bg-[#323232]' : 'bg-transparent'} w-1/3 md:w-1/2 max-sm:w-[37%] rounded-3xl focus:outline-none transition-all duration-500`;
  const textClasses = `font-[Poppins] ${isActive ? 'text-white' : 'text-[#7f7f7f]'} font-extrabold text-base max-md:text-sm max-[375px]:text-xs`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={{
        boxShadow: isActive ? "17px 17px 34px #090909, -17px -17px 34px #252525" : "none",
      }}
      aria-pressed={isActive}
    >
      <h1 className={textClasses}>
        {label}
      </h1>
    </button>
  );
};

export default ToggleButton;
