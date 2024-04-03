// ReusableComponent.tsx
import { IconType } from 'react-icons';
import React from 'react';
import { IoIosSettings } from 'react-icons/io';


interface ReusableComponentProps {
    explogo: string;
    text: string;
    desc: string;
}

const Expertbox: React.FC<ReusableComponentProps> = ({ explogo, text, desc }) => {
  return (
    
    <div className=" rounded-xl h-68 w-80 border-b-4 bg-white border-[#052651c6] py-10 px-8 shadow-lg hover:shadow-2xl transition-all  ease-in-out">
      <div className="h-30">
      {explogo}
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-700 my-4">
        {text}
        </h1>
        <p className="text-xs">
        {desc}
        </p>
      </div>
    </div>
  ); 
};

export default Expertbox;
