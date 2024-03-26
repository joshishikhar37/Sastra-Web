import React from "react";
import Link from "next/link";
import i from "@/images/i.gif";

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: "url(https://wallpaperaccess.com/full/1560151.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={backgroundStyle} className="relative rounded-md">
      <div className="w-full h-full  flex justify-center bg-zinc-950/50 absolute rounded-md ">
        <div className="m-auto">
          <div className="text-white text-5xl font-extrabold flex justify-center">
            Welcome to Sastra
          </div>
          <div className="text-white text-5xl font-black">
            Powering you for tomorrow
          </div>
          <div className="p-6 flex">
            <div className="flex gap-5 w-[100%]">
              <div className="w-[50%] flex justify-end pr-2">
                <button className="bg-[#0D5077] text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group ">
                  <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  <a
                    href="#ExpertSection"
                    className=" transition  duration:500 "
                  >
                    Our Services
                  </a>
                </button>
              </div>
              <div className="w-[50%]">
                <button className="bg-[#0D5077] text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  <a href="#Quotes">Get quote</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
