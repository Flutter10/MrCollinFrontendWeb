import React, { useEffect, useRef } from "react";
import image2 from "../../assets/vision/Container.png";
import image1 from "../../assets/vision/Container1.png";

const New = () => {
  const sectionRef = useRef(null);
  const teamSectionRef = useRef(null);

  useEffect(() => {
    // Observer for the main section
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
        threshold: 0.1, // Reduced threshold for better mobile visibility
        rootMargin: "0px 0px -50px 0px" // Added rootMargin to trigger earlier
      }
    );

    // Dedicated observer for the team section
    const teamObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const teamSlideElements =
              entry.target.querySelectorAll(".animate-slide");
            const teamBottomElements = entry.target.querySelectorAll(
              ".animate-slide-bottom"
            );

            teamSlideElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("slide-in-animation");
              }, index * 200);
            });

            teamBottomElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("slide-up-animation");
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe both sections with their respective observers
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (teamSectionRef.current) {
      teamObserver.observe(teamSectionRef.current);
    }

    // Trigger animations immediately for content that's already visible on load
    setTimeout(() => {
      const triggerInitialAnimations = () => {
        if (sectionRef.current) {
          const elements = sectionRef.current.querySelectorAll(".animate-slide");
          const bottomElements = sectionRef.current.querySelectorAll(".animate-slide-bottom");
          
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
        
        if (teamSectionRef.current) {
          const teamSlideElements = teamSectionRef.current.querySelectorAll(".animate-slide");
          const teamBottomElements = teamSectionRef.current.querySelectorAll(".animate-slide-bottom");
          
          teamSlideElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("slide-in-animation");
            }, index * 200);
          });
          
          teamBottomElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("slide-up-animation");
            }, index * 200);
          });
        }
      };
      
      triggerInitialAnimations();
    }, 500);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (teamSectionRef.current) {
        teamObserver.unobserve(teamSectionRef.current);
      }
      observer.disconnect();
      teamObserver.disconnect();
    };
  }, []);

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
            /* Add a default animation delay to ensure animations work without IntersectionObserver */
            animation: slideIn 0.8s ease-out 1s forwards paused;
          }
          
          .animate-slide-bottom {
            opacity: 0;
            transform: translateY(50px);
            /* Add a default animation delay to ensure animations work without IntersectionObserver */
            animation: slideUp 0.8s ease-out 1s forwards paused;
          }
          
          .slide-in-animation {
            animation: slideIn 0.8s ease-out forwards running !important;
          }
          
          .slide-up-animation {
            animation: slideUp 0.8s ease-out forwards running !important;
          }
          
          /* Force text visibility after a delay as a fallback */
          @media (max-width: 768px) {
            .force-visible {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
              transition: opacity 0.5s ease-out, transform 0.5s ease-out;
            }
          }
          
          .content-paragraph {
            white-space: normal;
            overflow-wrap: break-word;
            word-wrap: break-word;
            hyphens: auto;
            max-width: 100%;
            overflow-x: hidden;
          }
          
          .bullet-point {
            display: flex;
            margin-bottom: 8px;
          }
          
          .bullet-point::before {
            content: "•";
            margin-right: 8px;
          }
        `}
      </style>

      <div
        ref={sectionRef}
        className="text-white px-4 sm:px-6 lg:px-20 py-8 lg:py-12"
      >
        {/* About Section */}
        <div className="lg:max-w-2xl mb-8 lg:mb-0">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-slide text-center lg:text-left">
            About StudioSphere 360
          </p>
          <div
            className="text-base sm:text-lg font-extralight text-white lg:pr-20 animate-slide-bottom content-paragraph force-visible"
            style={{ textAlign: "center" }}
          >
            <style jsx>{`
              @media (min-width: 768px) {
                div {
                  text-align: left !important;
                }
              }
            `}</style>
            Born from the frustration with outdated, expensive studio systems
            and an insatiable drive for innovation, Studiosphere 360 emerged as
            a game-changer in the music and creative industries. The founders
            saw a world where creative talent was being held back by fragmented
            tools and prohibitive costs—one studio for recording, another for
            production, yet another for video editing and graphic design. They
            knew there had to be a better way.
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border items-center mt-8 lg:mt-16">
          {/* Image and Text for Mobile */}
          <div className="relative block md:hidden mb-6">
            <p className="text-2xl absolute sm:text-3xl left-16 top-44 flex items-center justify-center font-bold animate-slide mb-4 force-visible">
              Our Journey
            </p>
            <img
              src={image2}
              alt="Our Journey"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Left Image - Hidden on Mobile */}
          <div className="relative hidden md:flex items-center">
            <img
              src={image2}
              alt="Our Journey"
              className="w-[500px] h-[620px] object-cover"
            />
            <div className="absolute w-full">
              <p className="text-white text-4xl flex items-center mr-48 justify-center font-bold text-center animate-slide force-visible">
                Our Journey
              </p>
            </div>
          </div>

          {/* Right Text */}
          <div className="text-gray-300 font-extralight text-base sm:text-lg px-4 md:mr-40 overflow-visible">
            <div className="w-full animate-slide-bottom text-center md:text-left content-paragraph force-visible">
              <h3 className="text-xl font-semibold mb-3 text-white">A One-Stop Creative Powerhouse</h3>
              <p className="mb-4">
                Imagine having the benefits of a high-end recording studio, a cutting-edge production facility, a
                dynamic video editing suite, and a state-of-the-art graphic design
                studio—all under one virtual roof. Studiosphere 360 transforms
                this vision into reality by offering a platform that enables
                creators to take a project from concept to creation to
                distribution—all for one, cost-effective price.
              </p>
              <p className="mb-4">
                It's not just a tool, but a full ecosystem that saves time, reduces expenses, and
                breaks down the walls between different creative disciplines.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Revolutionizing the Creative Process</h3>
              <p className="mb-4">
                In the traditional world, setting up each phase of production meant booking separate
                studios, hiring multiple experts, and waiting endlessly for final
                approvals. Studiosphere 360 revolutionizes this process by offering:
              </p>
              
              <div className="mb-2 bullet-point">
                <span><strong>Integrated Workflows:</strong> Seamlessly transition from
                recording and mixing to video production and graphic design
                without switching platforms or incurring extra fees.</span>
              </div>
              <div className="mb-2 bullet-point">
                <span><strong>Time Savings:</strong> With every tool and resource centralized in one place,
                creators can focus on what truly matters—the art—rather than
                administrative hassles.</span>
              </div>
              <div className="mb-4 bullet-point">
                <span><strong>Cost Effectiveness:</strong> Get what would traditionally cost years of studio time for a one-time price,
                eliminating exorbitant fees and making professional-quality
                production accessible to all.</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Empowering Tomorrow's Creative Leaders</h3>
              <p className="mb-4">
                Studiosphere 360 isn't just about cutting costs—it's about
                liberating creativity. The platform is designed to empower
                recording artists, producers, managers, record labels, and
                songwriters to take full control of their projects. By unifying
                every aspect of the creative process, it transforms the
                traditional workflow into a fluid, dynamic experience where ideas
                can grow organically and projects are completed faster and more
                efficiently.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-white">The Future of Creativity Is Here</h3>
              <p className="mb-4">
                At its core, Studiosphere 360 is a bold statement: the future of music
                production and creative content is integrated, accessible, and
                limitless. It's a testament to what happens when visionaries
                refuse to accept the status quo. By giving creators every tool
                they need in one place, Studiosphere 360 doesn't just promise
                change—it delivers a new era where creativity is unbounded,
                efficient, and economical.
              </p>
              
              <p>
                Welcome to Studiosphere 360, where your
                creative journey is streamlined, empowered, and revolutionized—all
                from one site.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={teamSectionRef}
          className="grid grid-cols-1 md:grid-cols-2 border gap-6 items-center justify-center mt-8"
        >
          {/* Image and Text for Mobile */}
          <div className="relative block md:hidden mb-6">
            <p className="text-2xl absolute left-16 top-44 sm:text-3xl flex items-center justify-center font-bold text-center animate-slide mb-4 force-visible">
              Meet Our Team
            </p>
            <img
              src={image1}
              alt="Our Team"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Left Text */}
          <div className="flex items-center justify-center">
            <div className="text-gray-300 font-extralight text-base sm:text-lg px-4 md:ml-40">
              <p className="animate-slide-bottom text-center md:text-left content-paragraph force-visible">
                Our experienced leadership at StudioSphere 360 is committed to
                empowering artists and reshaping the music industry. With a
                passion for innovation and a deep understanding of the
                challenges independent artists face, our team is dedicated to
                providing a supportive and dynamic environment for creative
                expression. We are driven by the vision of a music industry that
                celebrates diversity, creativity, and artistic freedom.
              </p>
            </div>
          </div>

          {/* Right Image - Hidden on Mobile */}
          <div className="relative hidden md:flex justify-end items-center">
            <img
              src={image1}
              alt="Our Team"
              className="w-[500px] h-[620px] object-cover"
            />
            <div className="absolute flex items-center justify-center rounded-lg w-full">
              <p className="text-white text-4xl font-bold ml-40 animate-slide force-visible">
                Meet Our Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;