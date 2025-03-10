import React, { useEffect, useRef } from "react";
import bgimage from "../../assets/fan-reach/bgimage.png";
import arrow from "../../assets/create/arrow.png";

function Fans() {
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
      <div className="relative h-[70vh] w-full" ref={sectionRef}>
        {" "}
        {/* Added ref here */}
        <img
          src={bgimage}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  lg:px-20">
          <div className="space-y-0  mt-4 ">
            <h1 className="text-white font-bold font-['Orbitron']">
              <p className="lg:text-6xl text-3xl animate-slide mb-0">
                Connect with Fans,
              </p>
              <p className="lg:text-6xl text-3xl  mt-0 animate-slide ">
                amplify your music
              </p>
              <p className="text-white font-['Orbitron'] lg:text-lg text-[11px] mb-0 ">
                Studiosphere 360 is designed to bridge the gap between artists
                and their audience, making it effortless to connect with fans
                and elevate your music to new heights. Our platform integrates
                advanced social networking tools, targeted marketing, and
                immersive promotional campaigns, ensuring that your sound
                reaches the right ears. By leveraging our community features,
                you can engage directly with fans, receive real-time feedback,
                and build a loyal following—all while enjoying the benefits of
                cutting-edge analytics that help you understand your audience
                better. Whether you're launching a new track or building your
                brand, Studiosphere 360 amplifies your music through strategic
                distribution, peer-to-peer collaborations, and promotional tools
                that spotlight your creative journey. This holistic approach not
                only enhances your visibility but also creates lasting
                connections with fans who are eager to support and share your
                unique sound.
              </p>
            </h1>
            <div className="pt-2">
              <button
                className="text-black h-14 px-16 flex items-center justify-center rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300 shadow-lg"
                style={{
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%)",
                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <span className="font-bold text-lg font-['Orbitron']">
                  Try now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fans;
