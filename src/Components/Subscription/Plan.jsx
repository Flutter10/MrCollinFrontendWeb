import React, { useState } from "react";
import bronzem from "../../assets/subscription/bronzem.png";
import goldm from "../../assets/subscription/goldm.png";
import platinumm from "../../assets/subscription/platiniumm.png";
import Diamond from "../../assets/subscription/Diamond.png";
import Diamondy from "../../assets/subscription/Diamondy.png";
import bronzey from "../../assets/subscription/bronzey.png";
import goldy from "../../assets/subscription/goldy.png";
import platinumy from "../../assets/subscription/platinumy.png";
import group from "../../assets/subscription/Group.png";

export default function Plan() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePlanType = () => {
    setIsYearly(!isYearly);
  };

  // Plan descriptions
  const planDescriptions = {
    bronze: {
      title: "Your Launchpad to the Music Universe",
      description:
        "Perfect for beginners needing essential tools to start recording and experimenting with sound",
    },
    gold: {
      title: "Elevate Your Presence, Amplify Your Reach",
      description:
        "For rising creators looking to refine their production and share tracks more widely",
    },
    platinum: {
      title: "Explode Onto the Scene with Pro-Level Power",
      description:
        "Aimed at serious musicians, offering high-end production tools, faster support and industry insights",
    },
    diamond: {
      title: "Your Launchpad to the Music Universe",
      description:
        "Achieve ultimate success by polishing every track to quantum-level clarity and brilliance.",
    },
  };

  return (
    <div className="px-4 md:px-0 w-full ">
      <div className="flex flex-col sm:flex-row items-center justify-center py-3">
        <div className="animate-[slideFromLeft_1.5s_ease-in-out_forwards]">
          <h1 className="text-white font-[Orbitron] text-3xl md:text-5xl font-semibold">
            Great creation start
          </h1>
        </div>
        <div className="animate-[slideFromRight_1.5s_ease-in-out_forwards] mx-0 sm:mx-3">
          <h1 className="text-[#FFD700] font-[Orbitron] text-4xl md:text-6xl font-semibold">
            <p className="text-[#FFD700] font-[Orbitron] text-4xl md:text-6xl font-semibold">
              {" "}
              with a plan
            </p>
          </h1>
        </div>
      </div>

      {/* Monthly/Yearly Toggle */}
      <div className="flex justify-center mt-5 lg:px-2.5">
        <div className="flex bg-[#333] rounded-[50px] p-1.5 gap-1.5 w-full max-w-[400px]">
          <button
            className={` text-black border-none py-3 lg:px-[60px] cursor-pointer transition-all duration-300 font-[Orbitron] text-base font-bold relative z-[1] flex-1 ${
              !isYearly ? "bg-white text-black" : "bg-[#333] text-white"
            }`}
            style={{ borderRadius: "9999px" }}
            onClick={togglePlanType}
          >
            Monthly
          </button>
          <button
            className={`text-black border-none py-3 lg:px-[60px] cursor-pointer transition-all duration-300 font-[Orbitron] text-base font-bold relative z-[1] flex-1 ${
              isYearly ? "bg-white text-black" : "bg-[#333] text-white"
            }`}
            style={{ borderRadius: "9999px" }}
            onClick={togglePlanType}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Plans Container */}
      <div
        className={`flex flex-wrap md:flex-nowrap justify-center pt-10  bg-[#1A1A1A]  `}
      >
        {/* Bronze Plan */}
        <div
          className={`w-full max-w-[300px] flex flex-col ${
            !isYearly ? "mt-[53px]" : "mt-[54px]"
          }`}
        >          <div className="">
            <div className="bg-[#1A1A1A]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={isYearly ? bronzey : bronzem}
                  className="w-full h-auto"
                  alt="Bronze Plan"
                />
                {/* <div className="bg-[#CE8946] text-black text-center w-full py-1 px-2 font-bold text-sm mt-2">
                  BRONZE PLAN
                </div> */}
              </div>
            </div>
          </div>

          <div className="bg-[#222] relative flex-grow">
            <img src={group} />

            <div className="absolute top-0 p-4 text-center">
              <h3 className="text-white font-bold text-sm mb-2">
                <p className="text-2xl"> {planDescriptions.bronze.title}</p>
              </h3>
              <p className="text-gray-300 text-xs mb-4 text-left pr-8">
                {planDescriptions.bronze.description}
              </p>
            </div>
          </div>

          <div className="p-2 flex justify-center items-center">
            <button
              className={` border-none py-2 px-4 font-bold cursor-pointer transition-colors duration-300 hover:bg-[#B77835] mt-2 ${
                isYearly ? "bg-white text-[#CE8946]" : "bg-[#CE8946] text-white"
              }`}
            >
              {isYearly ? "Buy now" : "Already using"}
            </button>
          </div>
        </div>

        {/* Gold Plan */}
        <div className="w-full max-w-[300px] flex flex-col">
          <div className="">
            <div className="bg-[#1A1A1A]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={isYearly ? goldy : goldm}
                  className="w-full h-auto"
                  alt="Bronze Plan"
                />
                {/* <div className="bg-[#CE8946] text-black text-center w-full py-1 px-2 font-bold text-sm mt-2">
                  BRONZE PLAN
                </div> */}
              </div>
            </div>
          </div>

          <div className="bg-[#222] relative flex-grow">
            <img src={group} />

            <div className="absolute top-0 p-4 text-center">
              <h3 className="text-white font-bold text-sm mb-2">
                <p className="text-2xl"> {planDescriptions.gold.title}</p>
              </h3>
              <p className="text-gray-300 text-xs mb-4 text-left pr-8">
                {planDescriptions.gold.description}
              </p>
            </div>
          </div>

          <div className="p-2 flex justify-center items-center">
            <button className="bg-white text-black border-none py-2 px-4 font-bold cursor-pointer transition-colors duration-300 hover:bg-[#B77835] mt-2">
              {isYearly ? "Buy now" : "Buy now"}
            </button>
          </div>
        </div>

        {/* Platinum Plan */}
        <div
          className={`w-full max-w-[300px] flex flex-col ${
            !isYearly ? "mt-[53px]" : "mt-[54px]"
          }`}
        >
          {" "}
          <div className="">
            <div className="bg-[#1A1A1A]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={isYearly ? platinumy : platinumm}
                  className="w-full h-auto"
                  alt="Bronze Plan"
                />
                {/* <div className="bg-[#CE8946] text-black text-center w-full py-1 px-2 font-bold text-sm mt-2">
                  BRONZE PLAN
                </div> */}
              </div>
            </div>
          </div>
          <div className="bg-[#222] relative flex-grow">
            <img src={group} />

            <div className="absolute top-0 p-4 text-center">
              <h3 className="text-white font-bold text-sm mb-2">
                <p className="text-2xl"> {planDescriptions.platinum.title}</p>
              </h3>
              <p className="text-gray-300 text-xs mb-4 text-left pr-8">
                {planDescriptions.platinum.description}
              </p>
            </div>
          </div>
          <div className="p-2 flex justify-center items-center">
            <button className="bg-white text-black border-none py-2 px-4 font-bold cursor-pointer transition-colors duration-300 hover:bg-[#B77835] mt-2">
              {isYearly ? "Buy now" : "Buy now"}
            </button>
          </div>
        </div>

        {/* Diamond Plan - Only show in monthly view */}
        <div
          className={`w-full max-w-[300px] flex flex-col ${
            !isYearly ? "mt-[54px]" : "mt-[54.5px]"
          }`}
        >          <div className="">
            <div className="bg-[#1A1A1A]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={isYearly ? Diamondy : Diamond}
                  className="w-full h-auto"
                  alt="Bronze Plan"
                />
                {/* <div className="bg-[#CE8946] text-black text-center w-full py-1 px-2 font-bold text-sm mt-2">
                  BRONZE PLAN
                </div> */}
              </div>
            </div>
          </div>

          <div className="bg-[#222] relative flex-grow">
            <img src={group} />

            <div className="absolute top-0 p-4 text-center">
              <h3 className="text-white font-bold text-sm mb-2">
                <p className="text-2xl"> {planDescriptions.diamond.title}</p>
              </h3>
              <p className="text-gray-300 text-xs mb-4 text-left pr-8">
                {planDescriptions.diamond.description}
              </p>
            </div>
          </div>

          <div className="p-2 flex justify-center items-center">
            <button className="bg-white text-black border-none py-2 px-4 font-bold cursor-pointer transition-colors duration-300 hover:bg-[#B77835] mt-2">
              {isYearly ? "Buy now" : "Buy now"}
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Mobile specific styles */
        @media screen and (max-width: 767px) {
          .plans-container {
            flex-direction: column !important;
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
            gap: 15px;
          }

          .plans-container::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
