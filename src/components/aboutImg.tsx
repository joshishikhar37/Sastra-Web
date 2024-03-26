import React from "react";

const AboutImg = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(https://www.iibanks.com/wp-content/uploads/2023/03/01.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "13px",
  };

  return (
    <div style={backgroundStyle}>
      <div className="">
        <div className="text-slate-100 text-4xl font-semibold">
         About Us
        </div>
        
      </div>
    </div>
  );
};

export default AboutImg;
