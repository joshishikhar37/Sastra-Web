"use client";

import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";

import React, { useEffect, useState } from "react";

import { TbSettingsCog } from "react-icons/tb";
import { FaHandshakeSimple, FaVideo } from "react-icons/fa6";
import { SiSpringsecurity } from "react-icons/si";
import { TiWiFi } from "react-icons/ti";
import { HiDatabase } from "react-icons/hi";


export default function Home() {
  const [pageText, setPageText] = useState("");
  const [description, setDescriptions] = useState([]);

  useEffect(() => {
    // Fetch data from Strapi API
    fetch('http://localhost:1337/api/whychooseus')
      .then(response => response.json())
      .then(data => {
        const extractedDescription = data.data.attributes.description[0].children[0].text;
        setDescriptions(extractedDescription);
      })
      .catch(error => {
        console.error('Error fetching data from Strapi:', error);
      });
  }, []); 

  useEffect(() => {
    setPageText(window.localStorage.getItem("pageText") || "");
  }, []);
  return (
    <main>
      {" "}
      <div className="">
        <HeroSection />

        <section
          className="relative"
          style={{
            backgroundImage:
              "url('https://billionbeesfx.com/wp-content/uploads/2023/08/who-we-are-vector.png ')",
            backgroundSize: "cover", // Cover the entire div
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className="  w-[100%] py-[2%] flex items-center m-auto bg-gradient-to-r from-gray-200 to-[#759eb64f] ... rounded  ">
            <div className="w-[50%] border-r-2 ">
              <p className="text-[#22475d]  text-4xl text-right pr-_[5%]  font-black mr-10 ">
                Why choose us
              </p>
            </div>
            <div className="w-[25%] text-left pl-[3%] ml-10S text-[#052651]  font-extrabold ">
            
              <p>{description}</p>
           
            </div>
          </div>

          <div
            className="shadow-lg py-0 bg-gradient-to-r from-gray-200 to-[#759eb64f] ... "
            id="ExpertSection"
          >
            <div className="flex flex-col mx-auto">
              <h1 className="text-3xl font-bold text-[#052651]  text-mono mt-10   flex justify-center  ">
                Our Expertise{" "}
              </h1>
              <div className="flex flex-col">
                <div className="flex flex-wrap  flex-row gap-8 mx-auto">
                  <a href="./expertpage">
                  <div className="  rounded-xl h-68 w-80 border-b-4 bg-white border-[#052651c6] py-10 px-8 shadow-lg hover:shadow-2xl my-10 transition-all  ease-in-out">
                    <div className="h-30">
                        <TbSettingsCog
                          size={55}
                          color="#0A4085"
                          className="size={120}  transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-150"
                        />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-700 my-4">
                        Network Desgin
                      </h1>
                      <p className="text-xs">
                      Designing an adaptable network infrastructure to efficiently accommodate evolving business requirements .
                      </p>
                    </div>
                  </div>
                  </a>

                  <a href="./expertpage">
                  <div className="  rounded-xl h-88 w-80 border-b-4 bg-white border-[#052651c6] py-10 px-8 shadow-lg hover:shadow-2xl my-10 transition-all  ease-in-out">
                    <div className="h-30">
                      <HiDatabase
                        size={55}
                        color="#0A4085"
                        className="size={120}  transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-150"
                        />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-700 my-4">
                        Data Center{" "}
                      </h1>
                      <p className="text-xs">
                        Complete solution for data center design with service
                        continuity, security, flexibility and adaptability to
                        changes
                      </p>
                    </div>
                  </div>
                  </a>
                  <a href="./expertpage">
                  <div className="  rounded-xl h-68 w-80 border-b-4 bg-white border-[#052651c6] py-10 px-8 shadow-lg hover:shadow-2xl my-10 transition-all  ease-in-out">
                    <div className="h-30">
                      <FaVideo
                        size={55}
                        color="#0A4085"
                        className="size={120}  transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-150"
                        />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-700 my-4">
                        Video Conferencing{" "}
                      </h1>
                      <p className="text-xs">
                        Stay connected with your stakeholders anytime, anywhere
                        with our flawless VC solution
                      </p>
                    </div>
                  </div>
                </a>
                </div>
                <div className="flex flex-wrap flex-row gap-8 mx-auto">
                <a href="./expertpage">
                  <div className="  rounded-xl h-68 w-80 border-b-4 bg-white border-[#052651c6] py-10 px-8 shadow-lg hover:shadow-2xl my-10 transition-all  ease-in-out">
                    <div className="h-30">
                      <SiSpringsecurity
                        size={55}
                        color="#0A4085"
                        className="size={120}  transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-150"
                        />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-700 my-4">
                        Network Security{" "}
                      </h1>
                      <p className="text-xs">
                      Securing network integrity against internet threats involves robust measures, vigilance, and proactive strategies.
                      </p>
                    </div>
                  </div>
                  </a>
                  <a href="./expertpage">
                  <div className="  rounded-xl h-68 w-80 border-b-4 bg-white border-[#052651c6] py-10 px-8 shadow-lg hover:shadow-2xl my-10 transition-all  ease-in-out">
                    <div className="h-30">
                      <TiWiFi
                        size={55}
                        color="#0A4085"
                        className="size={120}  transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-150"
                        />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-700 my-4">
                        Wireless{" "}
                      </h1>
                      <p className="text-xs">
                      Efficiently design, plan, and deploy wireless solutions tailored to your premises specific requirements.
                      </p>
                    </div>
                  </div>
                  </a>
                  <a href="./expertpage">
                  <div className="  rounded-xl h-68 w-80 border-b-4 bg-white border-[#052651c6] py-10 px-8 shadow-lg hover:shadow-2xl my-10 transition-all  ease-in-out">
                    <div className="h-30">
                      <FaHandshakeSimple
                        size={55}
                        color="#0A4085"
                        className="size={120}  transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-150"
                        />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-700 my-4">
                        IT Consultancy{" "}
                      </h1>
                      <p className="text-xs">
                        Evaluate and implement your IT system and infrastructure
                        to help you achieve business objectives{" "}
                      </p>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#0d5477] to-slate-900 rounded-xl text-white text-lg mt-20 flex items-center my-auto lg:w-[100%] md:w-[60%] sm:w-[100%] pl-20">
          <div className="w-[70%] p-[2%] font-extralight overflow-hidden py-10">
            <p className="px-20 py-4">
              “We believe in our well talented and experienced experts who take
              pride and ownership in their jobs. With the right mixture of
              optimum solution and our experts, we give you the tailor made
              solution and consultation to meet your current business need which
              will also account for future ambiguity.”
            </p>
          </div>
          <div className="py-4 text-WHITE font-black text-2xl">
            <p className="">Kishor Panth</p>
            <p className="">CEO</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-center font-extrabold text-2xl">
            Our Valued Clients
          </p>

          <div id="Quotes">
            <LogoCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
