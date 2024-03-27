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
        setCount((prevCount) => prevCount + 1); // Increase count
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [count, limit, intervalDuration]);

  // Function to handle count up to 20
  useEffect(() => {
    if (limit < 25) {
      setIntervalDuration(80); // Reset interval duration
      setCount(0); // Reset count
    }
  }, [limit]);

  // Function to handle count up to 100
  useEffect(() => {
    if (limit > 300) {
      setIntervalDuration(2); // Further decrease interval duration for faster count up
      setCount(0); // Reset count
    }
  }, [limit]);

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
