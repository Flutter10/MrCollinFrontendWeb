import React, { useEffect, useRef } from "react";
import link from "../../assets/vision/Link.png";
import link1 from "../../assets/vision/Link1.png";
import link2 from "../../assets/vision/Link2.png";

const DataAnalysisPrograms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-slide");
            const bottomElements = entry.target.querySelectorAll(
              ".animate-slide-bottom"
            );

            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("slide-in-animation");
              }, index * 200);
            });

            bottomElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("slide-up-animation");
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.3,
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

  const programs = [
    {
      title: "Cloud Analytics For Beginners",
      icon: link,
      duration: "2 Weeks",
      price: "$80.00",
    },
    {
      title: "Data Analytics Tools",
      icon: link1,
      duration: "4 Weeks",
      price: "$120.00",
    },
    {
      title: "Data-driven Decision Making",
      icon: link2,
      duration: "8 Weeks",
      price: "$150.00",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(-50px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes slideUp {
            0% {
              transform: translateY(50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .animate-slide {
            opacity: 0;
            transform: translateX(-50px);
          }
          
          .animate-slide-bottom {
            opacity: 0;
            transform: translateY(50px);
          }
          
          .slide-in-animation {
            animation: slideIn 0.8s ease-out forwards;
          }
          
          .slide-up-animation {
            animation: slideUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <div ref={sectionRef} className="text-white min-h-screen p-8 py-4">
        <div className="max-w-[90%] mx-auto overflow-hidden">
          <h1 className="text-5xl font-['Orbitron'] mb-0">
            <p className="lg:text-5xl animate-slide">Data Analysis Programs</p>
          </h1>

          <p className="text-white font-light mt-4 lg:text-lg max-w-lg animate-slide-bottom">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>

          <div className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-0">
            {programs.map((program, index) => (
              <div
                key={index}
                className="border border-gray-700 aspect-square flex flex-col"
              >
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={program.icon}
                    alt={program.title}
                    className="object-contain"
                  />
                </div>

                <div className="p-6 space-y-4 overflow-hidden">
                  <h3 className="text-lg font-['Orbitron']">
                    <p className="text-lg font-extralight mb-0 animate-slide-bottom">
                      {program.title}
                    </p>
                  </h3>
                  <p className="text-white font-extralight text-md mt-0 animate-slide-bottom">
                    {program.duration}
                  </p>
                  <p className="text-white font-extralight font-['Orbitron'] animate-slide">
                    {program.price}
                  </p>
                  <button className="bg-[#FD6262] hover:bg-red-500 text-black font-extralight font-['Orbitron'] py-2 px-4 rounded-md text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalysisPrograms;
