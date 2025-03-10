import React from "react";
import bg1 from "../../assets/record/bg.png";
import bg2 from "../../assets/record/Group.png";

const Music = () => {
  return (
    <div className="">
      <div
        className="relative bg-cover bg-center  lg:px-16 bg-no-repeat " // Changed p-4 to py-16 px-4
        style={{
          backgroundImage: `url(${bg2})`, // Replace with bg2
        }}
      >
        <div className="relative w-full h-[700px] overflow-hidden  ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat my-12" // Removed p-20
            style={{
              backgroundImage: `url(${bg1})`, // Replace with bg1
              filter: "brightness(0.9)",
            }}
          />

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-8">
            <h1
              className="text-xl md:text-5xl font-bold mb-6 max-w-7xl leading-tight"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              <p className="lg:text-4xl text-xl">
                To Record Music On{" "}
                <span className="text-[#7FFF00]">STUDIOSPHERE</span>,
                Use The Built-In Recording Feature Or Upload Your Audio Files
                Directly Through The Platform.
              </p>
            </h1>

            <p
              className="text-sm lg:text-xl max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
