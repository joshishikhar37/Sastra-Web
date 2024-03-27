import AboutExpHero from "@/components/aboutExpHero";
import React from "react";

export default function ExpertPage() {
 
  return (
    <section className="bg-gradient-to-r from-gray-100/90 to- bg-sky-900 ... h-screen w-screen flex justify-center">
    <div className="mt-36 flex-col justify-center items-center">
    <h1 className="font-black text-5xl flex justify-center mx-auto">Expert Page is</h1>

      <div className="flex gap-4">
        <h1 className="text-white font-black text-5xl">UNDER</h1>
        <h1 className="font-black text-5xl">CONSTRUCTION</h1>
      </div>
      <div className="mx-auto flex justify-center text-center">
        <h1 className="font-black text-3xl text-center">
          Site is under Construction
        </h1>
            </div>
            <div className="mx-auto flex justify-center text-center">
        <h1 className="text-white font-black text-3xl text-center">
         Please visit later
        </h1>
      </div>
    </div>
  </section>
  );
}
