import React, { useEffect, useRef } from "react";
import group1 from "../../assets/fan-reach/Group1.png";
import group2 from "../../assets/fan-reach/Group2.png";
import group3 from "../../assets/fan-reach/Group3.png";

const Career = () => {
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
              image.classList.add("pop-rotate-animation");
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
    @keyframes initialAnimation {
      0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
      }
      20% {
        transform: scale(0) rotate(0deg);
        opacity: 1;
      }
      30% {
        transform: scale(1) rotate(0deg);
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .circle-image {
      transform: scale(0);  /* Initial state */
    }

    .pop-rotate-animation {
      opacity: 1;
      animation: 
        initialAnimation 2s ease-out forwards,
        rotate 8s linear infinite;
      animation-delay: 0.2s, 1s;
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
  `}
      </style>
      ;
      <div className="bg-black min-h-screen px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl flex  justify-center font-['Orbitron'] text-white mb-20">
            <p className="lg:text-5xl text-2xl ">
              Start music as your career in 3 easy steps
            </p>
          </h1>

          {/* Sections */}
          <div className="space-y-16">
            {/* Section 1 - Center Aligned */}
            <div ref={section1Ref} className="flex flex-col mt-16">
              <div className="lg:flex lg:flex-row flex-col justify-between">
                <div className=" ">
                  <img src={group1} className="" alt="rotating circle" />
                </div>
                <div className="flex flex-col justify-center ">
                  <h2 className="text-2xl md:text-3xl font-['Orbitron'] ">
                    <div
                      className="text-[#FC5252] mb-0 lg:mt-0 mt-4 lg:text-3xl text-2xl "
                      style={{ textAlign: "center" }}
                    >
                      <style jsx>{`
                        @media (min-width: 768px) {
                          div {
                            text-align: left !important;
                          }
                        }
                      `}</style>
                      1. Create Your Sound:
                    </div>
                  </h2>
                  <div
                    className="text-gray-300 max-w-2xl mb-4 lg:text-2xl leading-relaxed font-['Orbitron']"
                    style={{ textAlign: "center" }}
                  >
                    <style jsx>{`
                      @media (min-width: 768px) {
                        div {
                          text-align: left !important;
                        }
                      }
                    `}</style>
                    Dive into our intuitive recording and production tools to
                    craft your unique sound. Studiosphere 360 offers an
                    all-in-one studio where you can write, record, mix, and
                    master your music—no need to juggle multiple platforms or
                    invest in expensive equipment.
                  </div>
                  <button
                    className="bg-[#1A1A1A] text-white px-8 py-2.5 max-w-xs font-['Orbitron'] text-sm relative group overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #333333 0%, #1A1A1A 100%)",
                      boxShadow:
                        "0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "9999px", // Added this line for full rounding
                    }}
                  >
                    <span className="relative z-10 text-lg font-['Orbitron']">
                      Try Now
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
              <div className="flex lg:flex-row flex-col justify-between">
                <div className="flex lg:hidden">
                  <img src={group2} className="" />
                </div>
                <div className="flex flex-col justify-center max-w-2xl">
                  <h2 className="text-3xl  font-['Orbitron'] ">
                    <div
                      className="text-[#FFD700] lg:text-3xl lg:mt-0 mt-4"
                      style={{ textAlign: "center" }}
                    >
                      <style jsx>{`
                        @media (min-width: 768px) {
                          div {
                            text-align: left !important;
                          }
                        }
                      `}</style>
                      2. Launch Your Project:
                    </div>{" "}
                  </h2>

                  <div
                    className="text-gray-300 mb-8 lg:text-2xl max-w-2xl leading-relaxed font-['Orbitron']"
                    style={{ textAlign: "center" }}
                  >
                    <style jsx>{`
                      @media (min-width: 768px) {
                        div {
                          text-align: left !important;
                        }
                      }
                    `}</style>
                    Once your track is polished, easily distribute it across all
                    major streaming platforms with just a few clicks. Our
                    streamlined process ensures your music reaches a global
                    audience, maximizing your exposure without the hassle.
                  </div>

                  <button
                    className="bg-[#1A1A1A] text-white max-w-xs px-8 py-2.5 font-['Orbitron'] text-sm relative group overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #333333 0%, #1A1A1A 100%)",
                      boxShadow:
                        "0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "9999px", // Added this line for full rounding
                    }}
                  >
                    <span className="relative z-10 text-lg font-['Orbitron']">
                      Try Now
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
                <div className="flex lg:flex justify-between">
                  <div className="hidden lg:block">
                    <img src={group2} className="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Center Aligned */}
            <div ref={section3Ref} className="flex flex-col">
              <div className="lg:flex lg:flex-row flex-col justify-between ">
                <div className="">
                  <img src={group3} className="" />
                </div>
                <div className="flex flex-col justify-center max-w-2xl">
                  <h2 className="lg:text-3xl font-['Orbitron'] text-white mb-2">
                    <div
                      className="text-[#FFD700] lg:text-3xl text-xl lg:mt-0 mt-4"
                      style={{ textAlign: "center" }}
                    >
                      <style jsx>{`
                        @media (min-width: 768px) {
                          div {
                            text-align: left !important;
                          }
                        }
                      `}</style>
                      3. Connect and Grow:
                    </div>
                  </h2>
                  <div
                    className="text-gray-300 mb-8 lg:text-2xl leading-relaxed font-['Orbitron']"
                    style={{ textAlign: "center" }}
                  >
                    <style jsx>{`
                      @media (min-width: 768px) {
                        div {
                          text-align: left !important;
                        }
                      }
                    `}</style>
                    Engage with a vibrant community of fans, fellow artists, and
                    industry experts. Use our integrated promotional tools and
                    real-time analytics to build your brand, refine your
                    strategy, and turn your passion into a thriving career. With
                    Studiosphere 360, starting your music career is
                    straightforward, efficient, and designed to empower you
                    every step of the way.
                  </div>
                  <button
                    className="bg-[#1A1A1A] text-white px-8 py-2.5 max-w-xs font-['Orbitron'] text-sm relative group overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #333333 0%, #1A1A1A 100%)",
                      boxShadow:
                        "0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "9999px", // Added this line for full rounding
                    }}
                  >
                    <span className="relative z-10 text-lg font-['Orbitron']">
                      Try Now
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

export default Career;
