import React from "react";
import { IoHome } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" bg-white px-[3%] py-[1%]  flex justify-between w-[100%]">
      <div className="w-20 flex items-center hover:scale-150 transation duration-200 ease-in-out">
        <a href="/">
          <img
            src="https://sastranetwork.com/storage/2021/05/sastra-logo-2048x1220.png"
            alt="sastra"
          />
        </a>
      </div>
      <div className="flex items-center w-[25%] pr-[3%]">
        <ul className="flex justify-between gap-5 text-[#0D5077] text-l font-bold cursor-pointer w-full">
          <li
            className=" px-1 shadow-lg shadow-cyan-100/5  transition duration-500  
                        border-b-2  border-solid border-transparent hover:border-[#22475d]
                        hover:brightness-150 hover:scale-125  rounded-md w-[25%] flex justify-center"
          >
            <a href="/" className="flex ">
              <h1 className="">Home</h1>
            </a>
          </li>
          <li
            className=" px-1 shadow-lg shadow-cyan-100/5  transition duration-500  
                        border-b-2  border-solid border-transparent hover:border-[#22475d]
                        hover:brightness-150 hover:scale-125  rounded-md w-[25%] flex justify-center"
          >
            <a href="/about">About</a>
          </li>
          <li
            className=" px-1 shadow-lg shadow-cyan-100/5  transition duration-500  
                          border-b-2  border-solid border-transparent hover:border-[#22475d]
                          hover:brightness-150 hover:scale-125  rounded-md w-[25%] flex justify-center"
          >
            <a href="/career">Career</a>
          </li>
          <li
            className=" px-1 shadow-lg shadow-cyan-100/5  transition duration-500  
                          border-b-2  border-solid border-transparent hover:border-[#22475d]
                          hover:brightness-150 hover:scale-125  rounded-md w-[25%] flex justify-center"
          >
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
