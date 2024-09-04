import React from 'react'
interface ToggleInfo {
   currentToggleData:string;
}
const ToggleInfo: React.FC<ToggleInfo> = ({currentToggleData}) => {
  return (
    <div className="w-full px-8 overflow-y-auto max-h-[28vh] scrollbar-thin scrollbar-track-[#272C31] scrollbar-thumb-neutral-950 max-sm:pb-3">
      <h1 className="text-[#969696] font-[Plus] leading-8  text-lg max-[375px]:text-sm" >{currentToggleData}</h1>
    </div>
  )
}

export default ToggleInfo 