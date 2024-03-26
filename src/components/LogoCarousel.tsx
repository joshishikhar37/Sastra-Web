"use client";

import Image from "next/image";

import election from "@/images/election.png";
import ntc from "@/images/ntc.png";
import cg from "@/images/cg.png";
import crown from "@/images/crown.png";
import adbl from "@/images/adbl.png";
import kendra from "@/images/kendra.png";
import nitc12345 from "@/images/nitc12345.png";
import nta1 from "@/images/nta1.png";
import opmcm123456789 from "@/images/opmcm123456789.png";
import police123456 from "@/images/police123456.png";
import { useState } from "react";

function LogoCarousel() {
  const [isHovered, setIsHovered] = useState(true);

  const logos = [
    { src: election, alt: "Election", link: "https://google.com" },
    { src: ntc, alt: "ntc", link: "https://www.ntc.net.np" },
    { src: cg, alt: "cg", link: "https://cgnet.com.np" },
    { src: crown, alt: "crown", link: "https://www.crowneimperial.com" },
    { src: adbl, alt: "adbl", link: "https://www.adbl.gov.np" },
    { src: kendra, alt: "kendra", link: "https://kendrabindu.com" },
    { src: nitc12345, alt: "nitc12345", link: "https://nitc.gov.np" },
    { src: nta1, alt: "nta1", link: "https://nta.gov.np" },
    { src: opmcm123456789, alt: "opmcm123456789", link: "https://nta.gov.np" },
    { src: police123456,alt: "police123456",link: "https://www.nepalpolice.gov.np",},
  ];

  return (
    <div className=" pb-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-60} animate-infinite-scroll hover:!animated-infinite-scroll ">
        {logos.map((logo, index) => (
          <li key={index}>
            <a href={logo.link}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className="hover:scale-150 transition-all ease-in-out duration-500"
              />
            </a>
          </li>
        ))}
      </ul>
      <ul
        className=" py-10 flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-60 animate-infinite-scroll hover:!animated-infinite-scroll "
        aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <a href={logo.link}>

            <Image
              src={logo.src}
              alt={logo.alt}
              className="hover:scale-150 transition-all ease-in-out duration-500"
              />
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default LogoCarousel;