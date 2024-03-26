// ReusableComponent.tsx
import { IconType } from 'react-icons';
import React from 'react';
import { IoIosSettings } from 'react-icons/io';


interface ReusableComponentProps {
  text: string;
  desc: string;
}

const AboutBox: React.FC<ReusableComponentProps> = ({ text, desc }) => {
  return (
    <div className='h-68 w-80 border-b-4 border-sky-900 py-8 px-6 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out'>
      <div className='flex justify-center flex-col'>
          <h1 className='text-6xl text-sky-900 font-semibold mx-auto'>{text}</h1>
          <p className='mx-auto text-xs font-semibold'>{desc}</p>
      </div>
    </div>
  ); 
};

export default AboutBox;
