import React, { useState, ChangeEvent, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface IGModalProps {
  setIsOpen: (isOpen: boolean) => void;
  setArrOfImg: (updateFn: (prevArrOfImg: string[]) => string[]) => void;
  arrOfImg: string[];
}

const IGModal: React.FC<IGModalProps> = ({ setIsOpen, setArrOfImg, arrOfImg }) => {
  const [imageUrl, setImageUrl] = useState<string>(
    "https://images.unsplash.com/photo-1725027090494-8aa73667f83b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedImages = localStorage.getItem('arrofImg');
        const images: string[] = storedImages ? JSON.parse(storedImages) : [];
        setArrOfImg(() => [...images]);
      } catch (error) {
        console.error('Error accessing localStorage', error);
      }
    }
  }, [setArrOfImg]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result as string;
        setImageUrl(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = () => {
    if (!imageUrl) return;

    setArrOfImg(prev => {
      const updatedArr = [...prev, imageUrl];
      if (typeof window !== 'undefined') {
        localStorage.setItem('arrofImg', JSON.stringify(updatedArr));
      }
      return updatedArr;
    });

    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-1/3 max-sm:w-[90%] h-[90%] max-lg:w-[60%] bg-[#171717eb] p-4 rounded-3xl relative">
        <button
          className="w-10 h-10 rounded-full absolute top-6 right-6 text-white bg-[#171717eb] flex items-center justify-center"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          X
        </button>

        <div className="w-full h-full bg-[#40464D] rounded-3xl flex flex-col">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Preview"
              className="h-1/2 w-full object-cover object-center rounded-tl-2xl rounded-tr-2xl"
            />
          )}

          <div className="w-full flex flex-col items-center gap-5 p-6">
            <Label htmlFor="picture" className="w-full text-center">
              <h1 className="text-white">Preview of the Picture</h1>
            </Label>

            <Input
              id="picture"
              type="file"
              className="text-white"
              onChange={handleFileChange}
              accept="image/*"
            />

            <Input
              type="url"
              placeholder="Enter the Image URL"
              className="text-white"
              value={imageUrl}
              onChange={handleUrlChange}
            />

            <button
              className="w-28 rounded-full p-3 bg-[#171717eb]"
              style={{ boxShadow: "inset 5px 5px 8px #090909, inset -5px -5px 8px #252525" }}
              onClick={handleSubmit}
            >
              <h1 className="font-[Poppins] text-center text-white">Submit</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IGModal;
