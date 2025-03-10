import React, { useEffect, useRef } from "react";
import bgimage from "../../assets/rights/bgimage.png";
import bgimage1 from "../../assets/rights/Group.png";

function Music_Right() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-slide");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("slide-in-animation");
              }, index * 200); // Increased delay between elements
            });
          }
        });
      },
      {
        threshold: 0.1, // Reduced threshold for earlier triggering
        rootMargin: "50px", // Added margin to trigger earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(-100px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide {
            opacity: 0;
            transform: translateX(-100px);
          }
          .slide-in-animation {
            animation: slideIn 0.8s ease-out forwards;
          }
        `}
      </style>
      <div className="relative h-[70vh] w-full" ref={sectionRef}>
        {" "}
        {/* Added ref here */}
        <img
          src={bgimage}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full  flex lg:flex-row flex-col  justify-between lg:px-20">
          <div className="space-y-0 lg:mt-4 ">
            <h1 className="text-white font-bold font-['Orbitron']">
              <p className="lg:text-5xl font-['Poppins']   lg:mb-32">
                Music Rights
              </p>
              <p className="text-white font-['Orbitron']  lg:text-xl text-sm max-w-2xl lg:pt-8 lg:mt-20 ">
                Music Rights using Studiosphere is an integrated solution within
                the platform designed to simplify and manage the complexities of
                intellectual property in the music industry. It empowers
                artists, producers, and executives by automating and
                streamlining processes that have traditionally been
                time-consuming and legally intricate. Here's how it transforms
                music rights management:
              </p>
            </h1>
          </div>
          <div className="flex items-center justify-center lg:items-start">
            <img
              src={bgimage1}
              alt="background"
              className="lg:w-[80%] w-[60%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Music_Right;
