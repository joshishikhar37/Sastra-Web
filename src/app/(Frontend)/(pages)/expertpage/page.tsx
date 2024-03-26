import AboutExpHero from "@/components/aboutExpHero";
import React from "react";

export default function ExpertPage() {
  const BackGround = {
    backgroundImage:
      "url(https://thumbs.dreamstime.com/z/blue-sphere-network-white-background-networkwhite-vector-illustration-eps-66393548.jpg?ct=jpeg)",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="flex justify-center w-full h-full py-[5%] " style={BackGround}>
      <div className="flex-col text-center w-[88%] h-[100%]">
        <div className="flex justify-end">
          <AboutExpHero />
        </div>
        <div className="flex justify-end">
          <div className=" shadow-2xl mt-[5%] lg:w-[60%] rounded-2xl bg-white border-b-4 border-sky-700">
            <div className="px-[5%] flex my-[2%] ">
              <div className="w-[20%] bg-sky-100 mr-[5%]">image</div>

              <div className="flex-col pl-[2%] justify-start bg-sky-200 lg:w-[83%] md:w-[90%] w-[95%]">
                <h1 className="bg-sky-400 flex  text-2xl font-semibold font-sans">
                  Network Deisgn
                </h1>
                <div className="flex pl-[5%]">
                  <ul className="list-disc">
                    <li>Point 1</li>
                    <li>point 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
