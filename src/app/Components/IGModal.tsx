import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface IGprops {
  setisOpen: (isOpen: boolean) => void;
  setarrofImg: (updateFn: (prevArrofImg: string[]) => string[]) => void;
  arrofImg: string[];
}

const IGModal: React.FC<IGprops> = ({ setisOpen,setarrofImg,arrofImg }) => {
  const [imageUrl, setImageUrl] = useState<string>("https://images.unsplash.com/photo-1725027090494-8aa73667f83b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  const HandleClick = () => {
    const arrayOfImage: string[] = localStorage.getItem("arrofImg") == null 
      ? [] 
      : JSON.parse(localStorage.getItem("arrofImg") as string);
    arrayOfImage.push(imageUrl);
    localStorage.setItem("arrofImg", JSON.stringify(arrayOfImage));
  
  
    setarrofImg((prevarrofImg) => [...prevarrofImg, imageUrl]);
    setisOpen(false);
  };
  
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"> 
      <div className="w-1/3 max-sm:w-[90%] h-[90%] max-sm:h-[90%] max-lg:h-[90%] max-lg:w-[60%] bg-[#171717eb] p-4 rounded-3xl relative">
        <button
          className="w-10 rounded-full absolute top-6 right-6 text-white bg-[#171717eb]"
          onClick={() => { setisOpen(false); }} 
          aria-label="Close"
        >
          X
        </button>

        <div className="w-full h-full bg-[#40464D] rounded-3xl">
          {imageUrl && <img src={imageUrl} alt="Probably, the URL is not correct" className="h-1/2 w-full object-cover object-center rounded-tl-2xl rounded-tr-2xl" />}
          <div className="w-full flex items-center gap-5 flex-col p-6">
            <Label htmlFor="picture"><h1 className="text-white">Preview of the Picture</h1></Label>
            <Input id="picture" type="file" className="text-white" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const reader = new FileReader();
          
                reader.onload = () => {
                  const dataURL = reader.result as string; 
                  setImageUrl(dataURL);
                };
          
                reader.readAsDataURL(file);
              }
            }} />

            <Input type="url" placeholder="Enter the Image URL" className="text-white" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setImageUrl(e.target.value);
            }} />

            <button className="w-28 rounded-full p-3 bg-[#171717eb]" style={{ boxShadow: "inset 5px 5px 8px #090909,inset -5px -5px 8px #252525" }} onClick={HandleClick}>
              <h1 className="font-[Poppins] text-center text-white">Submit</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IGModal;
