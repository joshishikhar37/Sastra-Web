import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#161d25] w-full h-72 text-white mt-10">
      <div className="w-[50%] h-[50%] m-auto flex pt-10 font-bold">
        <div className="text-2xl w-[50%] text-center">
          Quick Links
          <div className="text-lg">
            <ul className="flex justify-center gap-5 pt-5 text-orange-500 font-semibold">
              <li className=" hover:scale-150 transition-all duration-300 ease-in-out">
                <a href="/about"> About </a>
              </li>
              <li className="  hover:scale-150 transition-all duration-300 ease-in-out">
                <a href="/career">Career</a>
              </li>
              <li className="  hover:scale-150 transition-all duration-300 ease-in-out">
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-2xl w-[50%] text-center">
          Follow us
          <div className="">
            <ul className="flex justify-center gap-5 pt-3">
              <li className=" hover:scale-150 transition-all duration-300 ease-in-out">
                <a href="https://www.facebook.com/sastra.network">
                  <img
                    src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
                    alt=""
                    className="w-9 rounded-full"
                  />
                </a>
              </li>

              <li  className=" hover:scale-150 transition-all duration-300 ease-in-out">
                <a href="https://www.linkedin.com/company/sastra/about/">
                  <img
                    src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-6xtrjbtc.png"
                    alt=""
                    className="w-10 rounded-full"
                  />
               </a>
              </li>


              <li  className=" hover:scale-150 transition-all duration-300 ease-in-out">
                <a href="https://x.com/SastraNetwork?s=09">
                   <img
                    src="https://static-00.iconduck.com/assets.00/twitter-icon-2048x2048-pm1hdjoo.png"
                    alt=""
                    className="w-10 rounded-full"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[65%] h-[40%] text-center border-t-2 m-auto pt-3">
        <p className="text-xl font-bold">An ISO 9001:2015 Certified Company</p>
        <p className="text-xs pt-3">
          Sastra Network Solution Inc. 1st floor, Dream Home Building
          Putalisadak, Kathmandu, Nepal | Phone: +977-1-5342523, +977-1-5342967,
          +977-1-5346317
        </p>
      </div>
      <div className="w-full h-[10%] bg-[#161d25] text-white text-center pt-1">
        Copyright © 2024 Sastra Network Solution Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
