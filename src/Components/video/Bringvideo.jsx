import React, { useEffect, useRef } from "react";
import circle from "../../assets/video/img.png";
import circle1 from "../../assets/video/img1.png";
import circle2 from "../../assets/video/img2.png";

const Bringvideo = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when section is visible
            entry.target.classList.add("section-visible");

            // Find and animate the image in this section
            const image = entry.target.querySelector(".circle-image");
            if (image) {
              image.classList.add("pop-scale-animation");
            }

            // Find and animate text elements
            const textElements =
              entry.target.querySelectorAll(".animate-slide");
            textElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("slide-in-animation");
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    // Observe all sections
    [section1Ref, section2Ref, section3Ref].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [section1Ref, section2Ref, section3Ref].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <>
      <style>
        {`
    @keyframes popScale {
      0% {
        transform: scale(0.6);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .circle-image {
      transform: scale(0.6);  /* Initial state - 60% of size */
      opacity: 0.7;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    }

    .pop-scale-animation {
      animation: popScale 0.8s ease-out forwards;
    }

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
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .section-flex {
        flex-direction: column !important;
      }
      
      .section-content {
        order: 2;
        text-align: center;
        margin-top: 1rem;
      }
      
      .section-image {
        order: 1;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
      }
      
      .section-right .section-image {
        order: 1;
      }
      
      .section-right .section-content {
        order: 2;
      }
      
      .mobile-center {
        text-align: center;
      }
      
      .mobile-ml-0 {
        margin-left: 0 !important;
      }
      
      .circle-image {
        max-width: 100%;
        height: auto;
      }
    }
  `}
      </style>
      <div className="bg-black min-h-screen px-4 sm:px-8 py-8 sm:py-16">
        <div className="max-w-[90%] mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl flex justify-center font-['Orbitron'] text-white mb-10 sm:mb-20">
            <p className="text-2xl sm:text-4xl text-center">
              Bring your Video to life
            </p>
          </h1>

          {/* Sections */}
          <div className="space-y-16">
            {/* Section 1 - Center Aligned */}
            <div ref={section1Ref} className="flex flex-col">
              <div className="flex justify-between section-flex">
                <div className="section-image">
                  <img
                    src={circle}
                    className="circle-image"
                    alt="circle graphic"
                  />
                </div>
                <div className="flex flex-col justify-center section-content">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-['Orbitron'] mobile-center">
                    <p className="text-[#FC5252] mb-0">
                      1. StudioSphere 360
                      <span className="text-white ml-0 sm:ml-3 block sm:inline mt-0">
                        Text-to-Video
                      </span>{" "}
                    </p>
                    <p className="text-white">Service</p>
                  </h2>
                  <p className="text-gray-300 max-w-2xl mb-4 sm:mb-8 leading-relaxed font-['Orbitron'] text-sm sm:text-base">
                    StudioSphere 360 takes your written content—anything from a
                    brief script to a detailed storyline—and transforms it into
                    immersive 360-degree videos. Studiosphere advanced AI
                    seamlessly weaves together voiceovers, visuals, animations,
                    and text to video, so your fans is immediately drawn into
                    the heart of your music. Whether you’re looking to showcase,
                    product or your music video present a to create an engaging
                    brand story, StudioSphere 360 bridges the gap between text
                    and full-scale cinematic experiences. Simply input your
                    text, and let our technology handle the heavy
                    lifting—delivering a forward-thinking, dynamic, and highly
                    engaging video ready to captivate viewers on any platform.
                  </p>
                  <button
                    className="bg-[#1A1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 max-w-xs  sm:mx-0 font-['Orbitron'] text-sm relative group overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #333333 0%, #1A1A1A 100%)",
                      boxShadow:
                        "0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "9999px",
                    }}
                  >
                    <span className="relative z-10 text-base sm:text-lg font-['Orbitron']">
                      Crop Studio
                    </span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, #444444 0%, #2A2A2A 100%)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Section 2 - Left Aligned */}
            <div ref={section2Ref} className="">
              <div className="flex justify-between section-flex section-right">
                <div className="flex flex-col justify-center max-w-2xl section-content">
                  <p className="text-white text-lg sm:text-xl md:text-3xl font-['Orbitron'] mb-0 mobile-center">
                    2.Fast Quality Online Mastering –
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-['Orbitron'] mobile-center">
                    <span className="text-[#FFD700] text-xl sm:text-2xl mt-0">
                      STUDIOSPHERE 360
                    </span>{" "}
                  </h2>

                  <p className="text-gray-300 mb-4 sm:mb-8 leading-relaxed font-['Orbitron'] text-sm sm:text-base">
                    Cut through the noise with FAST Quality Online Mastering on
                    Studiosphere 360. This service delivers professional,
                    studio-grade mastering at lightning speed, so you can get
                    your tracks polished and production-ready without the wait.
                    No compromises, no fluff—just high-quality, precision
                    mastering that gives your music the edge it deserves,
                    anytime you need it. Ideal for creators on a deadline or
                    anyone who values both quality and speed, this service is
                    your ticket to taking your sound to the next level.
                  </p>

                  <button
                    className="bg-[#1A1A1A] text-white max-w-xs sm:mx-0 px-6 sm:px-8 py-2 sm:py-2.5 font-['Orbitron'] text-sm relative group overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #333333 0%, #1A1A1A 100%)",
                      boxShadow:
                        "0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "9999px",
                    }}
                  >
                    <span className="relative z-10 text-base sm:text-lg font-['Orbitron']">
                      Trim Studio
                    </span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, #444444 0%, #2A2A2A 100%)",
                      }}
                    />
                  </button>
                </div>
                <div className="flex justify-center sm:justify-end section-image">
                  <img
                    src={circle1}
                    className="circle-image "
                    alt="circle graphic"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 - Center Aligned */}
            <div ref={section3Ref} className="flex flex-col">
              <div className="flex justify-between section-flex">
                <div className="section-image">
                  <img
                    src={circle2}
                    className="circle-image "
                    alt="circle graphic"
                  />
                </div>
                <div className="flex flex-col justify-center max-w-2xl section-content">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-['Orbitron'] text-white mb-2 mobile-center">
                    3. Capture the Sound and create the magic with{" "}
                    <span className="text-[#FF69B4] ml-0 sm:ml-2 block sm:inline">
                      Studiosphere 360
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-4 sm:mb-8 leading-relaxed font-['Orbitron'] text-sm sm:text-base">
                    Turn every sonic moment into pure creative gold with
                    Studiosphere 360. This service is all about seizing those
                    raw, live sounds—whether you’re in a bustling city street or
                    a quiet studio session—and transforming them into
                    compelling, professional-grade audio masterpieces. With
                    cutting-edge recording and manipulation tools at your
                    fingertips, you can capture every nuance of your performance
                    and quickly morph it into the magic that defines your
                    signature sound. No excuses, no delays—just a seamless
                    process that empowers you to record, experiment, and
                    innovate wherever inspiration strike
                  </p>
                  <button
                    className="bg-[#1A1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 max-w-xs sm:mx-0 font-['Orbitron'] text-sm relative group overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #333333 0%, #1A1A1A 100%)",
                      boxShadow:
                        "0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "9999px",
                    }}
                  >
                    <span className="relative z-10 text-base sm:text-lg font-['Orbitron']">
                      Add Subtitle
                    </span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, #444444 0%, #2A2A2A 100%)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bringvideo;
