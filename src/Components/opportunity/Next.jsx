import React, { useEffect, useRef } from "react";
import bgimage from "../../assets/opportunity/bgimage.png";
import arrow from "../../assets/create/arrow.png";

function Next() {
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
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  lg:px-20">
          <div className="space-y-0 mt-4 ">
            <h1 className="text-white font-bold font-['Orbitron']">
              <p className="lg:text-6xl text-4xl  animate-slide mb-0">
                Next big opportunities are
              </p>
              <p className="lg:text-6xl text-4xl leading-normal mt-0 animate-slide ">
                waiting for you
              </p>
              <p className="text-white font-['Orbitron'] lg:text-2xl text-sm mb-8 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book{" "}
              </p>
            </h1>
            <div className="pt-8">
              <button
                className="text-black h-14 px-12 flex items-center justify-center rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300 shadow-lg"
                style={{
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%)",
                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <span className="font-bold text-lg font-['Orbitron']">
                  See opportunities
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Next;
