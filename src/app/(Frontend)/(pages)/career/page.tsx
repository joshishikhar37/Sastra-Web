import React from "react";
import CareerImg from "@/components/careerImg";

export default function CareerPage(){
    return(
       <div>
        <CareerImg/>
        <br />
        <div className="w-[100%] flex justify-center">
            <div className="pl-100 w-[50%]">
                <p>Be the part of diligent and well experienced team working in diversed portfolio of projects.</p>
                    <br />
                    <br />           
                <p> Drop your CV and write to us at:</p>
                    <br />
                <p className="text-red-500 text-xl font-bold border-b-2 border-spacing-7 border-red-500 hover:scale-110 hover:cursor-pointer">career@sastranetwork.com</p></div>
            </div>
       </div>
    );
}