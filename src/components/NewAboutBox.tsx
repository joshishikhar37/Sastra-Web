"use client"

import React, { useState, useEffect } from 'react';

interface ReusableComponentProps {
  desc: string;
  limit: number;
}

const NewAboutBox: React.FC<ReusableComponentProps> = ({ desc, limit }) => {
  const [count, setCount] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(20); // Initial interval duration

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < limit) {
        setCount((prevCount) => prevCount + 1); // Increase count rapidly initially
        if (intervalDuration < 200) {
          setIntervalDuration((prevIntervalDuration) => prevIntervalDuration + 2); // Gradually increase interval duration
        }
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [count, limit, intervalDuration]);

  return (
    <div className='h-68 w-80 border-b-4 border-sky-900 py-8 px-6 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out'>
      <div className='flex justify-center flex-col'>
        <h1 className='text-6xl text-sky-900 font-semibold mx-auto'>{count}+</h1>
        <p className='text-sm text-center font-semibold'>{desc}</p>
      </div>
    </div>
  );
};

export default NewAboutBox;
