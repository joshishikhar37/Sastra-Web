import React from "react";

const CareerImg = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(http://sastranetwork.com/wp-content/uploads/2021/05/communication-4871245_1920.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center" ,
    borderRadius: "13px",
  };

  return (
    <div style={backgroundStyle} className="mt-3">
      <div className="">
        <div className="text-slate-100 text-4xl font-semibold ">
         Career at Sastra
        </div>
        
      </div>
    </div>
  );
};

export default CareerImg;
