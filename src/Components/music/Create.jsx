import React, { useEffect, useRef } from "react";
import bgimage from "../../assets/music/bgimage.png";
import arrow from "../../assets/create/arrow.png";
import i1 from "../../assets/create/i1.png";
import i2 from "../../assets/create/i2.png";
import i3 from "../../assets/create/i3.png";
import i4 from "../../assets/create/i4.png";
import i5 from "../../assets/create/i5.png";

function Create() {
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
                        /* Button styles */
    .create-button {
      background-color: white;
      color: black;
      height: 48px;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      border: none;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .create-button:hover {
  background-color: #f9d94c; /* This is the yellow color from your image */
    }
    
    .create-button img {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      transition: transform 0.5s ease-in-out;
    }
    
    .create-button:hover img {
      transform: translateX(4px);
    }
    @media (max-width: 640px) {
              .create-button {
      background-color: white;
      color: black;
      height: 34px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      border: none;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

              }
        `}
      </style>
      <div
        className="relative min-h-[70vh] h-auto w-full  lg:px-20 py-8 overflow-y-auto"
        ref={sectionRef}
      >
        <img
          src={bgimage}
          alt="background"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="relative w-full h-full flex flex-col justify-center z-10">
          <div className="space-y-4">
            <h1 className="text-white font-bold font-['Orbitron']">
              <p className="lg:text-6xl text-2xl leading-normal animate-slide">
                Create today,share your vision
              </p>
              <p className="lg:text-6xl text-2xl leading-normal animate-slide">
                with the world tomorrow.
              </p>
            </h1>
            <p className="text-white text-xs lg:text-sm">
              Unleash your creativity and accelerate your journey from idea to
              global impact with Studiosphere 360's all-in-one creative
              ecosystem. This service is designed for visionaries ready to make
              their mark, offering a streamlined pathway to not only craft your
              music but also share it with the world—almost instantaneously. •
              Rapid Creation Tools: Utilize state-of-the-art DAW integration,
              AI-powered songwriting, and cutting-edge production features to
              capture your creative spark in real time. • Accelerated Production
              Pipeline: With services like fast quality online mastering,
              transform your raw tracks into polished, professional-grade music
              faster than ever. • Global Collaboration Network: Connect with
              top-tier songwriters, producers, engineers, and artists, and
              collaborate seamlessly to refine your sound. • Instant
              Distribution: Once your masterpiece is ready, share your vision
              with a global audience the very next day, harnessing integrated
              sharing tools that bring your art to the world. • One-Stop Shop
              Perks: As a Studiosphere 360 member, enjoy a comprehensive suite
              of tools and services that cover every stage of the creative
              process—from ideation to distribution—empowering you to focus on
              what truly matters: your art.
            </p>
            <div className="">
              <button className="create-button">
                <span>Create Now</span>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
