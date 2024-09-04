"use client"
import ImageGallery from "./ImageGallery/page";
import Toggle from "./Toggle/page";
import { useRouter } from "next/navigation";

export default function Home() {


  return (
   <div className="min-h-screen w-full bg-[#1E1E1E] flex items-center justify-center">
       <div className="min-h-screen w-1/2 flex  max-lg:hidden">
        
       </div>
       <div className="min-h-screen w-1/2  max-lg:w-full p-5  max-lg:p-3 flex items-center flex-col gap-3">
        <Toggle/>
        <ImageGallery/>
       </div>
   </div>
  );
}
