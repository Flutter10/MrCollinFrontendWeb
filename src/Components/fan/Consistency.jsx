import React, { useEffect, useRef } from "react";
import group1 from "../../assets/career/Group1.png";
import group2 from "../../assets/career/Group2.png";
import group3 from "../../assets/career/Group3.png";

const Consistency = () => {
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
            <p className="lg:text-5xl ">
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
                <div className="flex flex-col justify-center mt-4 lg:mt-0">
                  <h2 className="text-2xl md:text-3xl font-['Orbitron'] ">
                    <div
                      className="text-[#FFD700] mb-0 text-xl lg:text-3xl "
                      style={{ textAlign: "center" }}
                    >
                      <style jsx>{`
                        @media (min-width: 768px) {
                          div {
                            text-align: left !important;
                          }
                        }
                      `}</style>
                      Consistency and Practice
                    </div>
                  </h2>
                  <div
                    className="text-gray-300 max-w-2xl mb-8 lg:text-2xl leading-relaxed font-['Orbitron']"
                    style={{ textAlign: "center" }}
                  >
                    <style jsx>{`
                      @media (min-width: 768px) {
                        div {
                          text-align: left !important;
                        }
                      }
                    `}</style>
                    Dedicate time daily to improving your craft, whether it’s
                    playing an instrument, singing, writing, or producing.
                  </div>
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
                      className="text-[#FFD700] text-lg  lg:text-3xl mt-4 lg:mt-0"
                      style={{ textAlign: "center" }}
                    >
                      <style jsx>{`
                        @media (min-width: 768px) {
                          div {
                            text-align: left !important;
                          }
                        }
                      `}</style>
                      Networking and Collaboration
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
                    Build relationships with other musicians, producers, and
                    industry professionals to grow your opportunities and learn
                    from others.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="hidden lg:block">
                    <img src={group2} className="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Center Aligned */}
            <div ref={section3Ref} className="flex flex-col">
              <div className="flex lg:flex-row flex-col justify-between ">
                <div className="">
                  <img src={group3} className="" />
                </div>
                <div className="flex flex-col justify-center max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-['Orbitron'] text-white mb-2">
                    <div
                      className="text-[#FC5252] text-xl mt-4 lg:mt-0 lg:text-3xl"
                      style={{ textAlign: "center" }}
                    >
                      <style jsx>{`
                        @media (min-width: 768px) {
                          div {
                            text-align: left !important;
                          }
                        }
                      `}</style>
                      Adaptability and Innovation{" "}
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
                    tay open to evolving trends and technologies in music to
                    keep your sound fresh and relevant.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consistency;
