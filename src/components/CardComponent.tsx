import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CardComponent = () => {
  const BackgroundImage = {
    backgroundImage:
      "url('https://billionbeesfx.com/wp-content/uploads/2023/08/who-we-are-vector.png ')",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    width: "100%",
    height: "700px",
    display: "flex",
    overflow: "hidden",
  };

  const CardHeader = {
    backgroundImage: "url('card.png')",
    height: "100px",
    width: "100%",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <div className=" h-[100%] w-[100%]" style={BackgroundImage}>
      <div className=" relative lg:w-[45%] h-[70%] md:w-[80%] w-[90%] bg-white shadow-2xl rounded-[30px] overflow-hidden bg-gradient-to-r from-white to-indigo-100 ... ">
        <div
          className=" relative w-[100%] bg-sky-200 overflow-hidden"
          style={CardHeader}
        >
          <img
            src="favicon.ico"
            alt=""
            className=" mt-2 h-20 w-36 absolute left-[76%]"
          />
        </div>
        <div className=" top-16 left-16 bg-blue-300 absolute w-48 h-48 rounded-[60px] flex justify-center item-center overflow-hidden">
          
            {<img //Image of the staff
              src="IMG_8569.jpg"
              alt="ID image"
              className="object-cover bg-salte-900"
            />}
        </div>  

        <div className="ml-[40%] py-[5%] pl-[10%]">
          <h1 className="text-4xl font-poppins " style={{ fontWeight: "900" }}>
            john Shrestha
          </h1>
          <h2 className="text-xl font-semibold">Position </h2>
        </div>
        <div className="w-[100%] flex my-[3%] ">
          <div className=" pb-14 w-[20%] h-[0%] flex-col text-center  border-r-4 border-slate-300 ">
            <h1 className="inline-flex text-l font-[900]">Staff ID</h1>
            <p>002</p>
          </div>
          <div className=" flex-col text-center  w-[53%] border-r-4 border-slate-300">
            <div className="">
              <div className="leading-tight mb-2">
                <h1 className="inline-flex text-l font-[900]">Email</h1>
                <p>Example@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="leading-tight">
                <h1 className="inline-flex text-l font-[900]">Phone Number</h1>
                <p>+977-9801053824</p>
              </div>
            </div>
          </div>
          <div className="  w-[22%] flex-col justify-center">
            <div className="pb-[2%] flex-col text-center">
              <div className="leading-tight pb-2">
                <h1 className=" font-semibold text-l">Address</h1>
                <p>Tokha, ktm, NP</p>
              </div>
            </div>
            <div className="flex-col text-center">
              <div className="leading-tight">
                <h1 className="font-semibold text-l">Blood Type</h1>
                <p>B+ve</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-slate-100 w-[100%] px-[5%] py-[5%] flex justify-between pt-[2%] overflow-hidden bg-gradient-to-r from-white to-indigo-100 ... border-t-2 border-indigo-100">
          <div className="flex">
            <RiVerifiedBadgeFill size={25} className="text-green-600" />
            <h1 className="text-l font-semibold pl-2">Verifed Staff </h1>
          </div>
          <div>
            <p className="text-l font-semibold ">
              {" "}
              Visit
              <a href="/" className="text-sky-800 font-bold pl-1">
                SASTRA NETWORK SOLUTION INC
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
