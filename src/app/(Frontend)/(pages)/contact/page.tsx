"use client";
import React from "react";
import ContactImg from "@/components/contactCover";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import Tick from "@/components/recaptcha";
import Map from "@/components/Map";

export default function CareerPage() {
  return (
    <div>
      <br />
      <ContactImg />

      <div className="w-[100%] flex justify-center mx-auto">
        <div className="pl-120 w-[100%] flex justify-center gap-6">
          <div className="h-68 w-72 border-b-4 border-sky-600 py-10 pl-16 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out">
            <div className="h-30   ">
              <FaPhoneAlt
                size={35}
                className=" hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-700 my-4">
                Phone
              </h1>
              <p className="text-xs">+977-1-5342523</p>
              <p className="text-xs">+977-1-5363967</p>
            </div>
          </div>

          <div className="h-68 w-72 border-b-4 border-sky-600 py-10 pl-16 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out">
            <div className="h-30   ">
              <MdMarkEmailRead
                size={35}
                className=" hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-700 my-4">
                Email
              </h1>
              <p className="text-xs">info@sastranetwork.com</p>
              <p className="text-xs">it@sastranetwork.com</p>
            </div>
          </div>

          <div className="h-68 w-72 border-b-4 border-sky-600 py-10 pl-16 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out">
            <div className="h-30   ">
              <FaLocationDot
                size={35}
                className=" hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-700 my-4">
                Address
              </h1>
              <p className="text-xs">1st floor, Dream Home Building</p>
              <p className="text-xs">Putalisadak, Ktm, NP</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center h-80 items-center mb-20">
        <div className="rounded-xl overflow-hidden">
          <Map />
        </div>
      </div>

      <div className="w-[60%] bg-sky-600 px-64 py-10 flex justify-center mx-auto rounded-2xl ">
        <form className="" action="">
          <h1 className="font-bold text-white text-3xl my-4">
            Get in Touch with us.
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="w-[100%] my-2 px-4 py-1 rounded-xl "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[100%] my-2 px-4 py-1 rounded-xl "
            />
            <input
              type="number"
              placeholder="Phone no"
              className="w-[100%] my-2 px-4 py-1 rounded-xl "
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-[100%] my-2  px-4 py-1 rounded-xl "
            />
            <input
              type="text"
              placeholder="Message"
              className="w-[100%] h-24 my-2 px-4 py-1 flex justify-start items-start  rounded-xl  "
            />
            <br />
            <div className=" flex justify-center">
              <Tick />
            </div>
            <br />
            <div className="flex justify-center">
              <button className="h-10 w-60 bg-white font-mono text-l hover:scale-110 hover:bg-gray-200 rounded-xl ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
