import React, { useEffect, useRef } from "react";
import bgimage from "../../assets/subscription/bg.jpeg";
import micon from "../../assets/subscription/micon.png";
import micon2 from "../../assets/subscription/micon2.png";
import tick from "../../assets/subscription/tick.png";

function Studio() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes to all animated elements when section is visible
            const elements = entry.target.querySelectorAll(".animate-slide");
            elements.forEach((el, index) => {
              // Add delay based on index for staggered animation
              setTimeout(() => {
                el.classList.add("slide-in-animation");
              }, index * 10); // 100ms delay between each element
            });
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 10% of the section is visible
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
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

          @keyframes slideIn {
            0% {
              transform: translateX(-50%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide {
            opacity: 0;
            transform: translateX(-50%);
          }
          .slide-in-animation {
            animation: slideIn 1s ease-out forwards;
          }
          /* Add Quicksand font styling */
          .quicksand {
            font-family: 'Quicksand', sans-serif;
          }

          /* Responsive table styles */
          .comparison-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            text-align: center;
            width: 100%;
            height: 100%;
            font-size: 1.25rem;
          }

          .feature-column {
            text-align: left;
            padding-top: 4.2rem;
            height: 100%;
            overflow: hidden;
          }

          .plan-column {
            text-align: center;
            overflow: hidden;
            padding: 1rem;
          }

          .black-bg {
            background-color: black;
            border-radius: 0.5rem;
          }

          /* Mobile styles */
          @media (max-width: 1024px) {
            .comparison-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
            }
          }

          @media (max-width: 640px) {
            .comparison-grid {
              grid-template-columns: 1fr;
              gap: 2px;
            }

            .feature-column {
              display: none;
            }

            .plan-column {
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              text-align: left;
              gap: 10px;
              padding: 16px;
            }

            .plan-title {
              grid-column: span 2;
              text-align: center;
              margin-bottom: 10px;
            }

            .plan-price {
              grid-column: span 2;
              text-align: center;
              margin-top: 10px;
              font-weight: bold;
            }

            .feature-label {
              display: block !important;
              font-weight: 500;
            }

            .feature-value {
              text-align: center;
            }

            .mobile-spacer {
              margin-bottom: 8px;
            }
          }
        `}
      </style>
      <div
        ref={sectionRef}
        className="text-white p-4 md:p-12 flex flex-col items-center h-full mt-10 quicksand"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full">
          <div className="comparison-grid gap-16">
            {/* Features Column */}
            <div className="feature-column  animate-slide">
              <p className="mb-3 flex items-center gap-2 font-medium">
                <span className="text-xl">
                  <img src={micon} className="w-6 " alt="icon" />
                </span>{" "}
                Free Trial
              </p>
              <p className="mb-3 flex items-center gap-2 animate-slide font-medium">
                <span className="text-xl">
                  <img src={micon} className="w-6 " alt="icon" />
                </span>{" "}
                Unlimited releases
              </p>
              <p className="mb-3 flex items-center gap-2 animate-slide font-medium">
                <span className="text-xl">
                  <img src={micon} className="w-6 " alt="icon" />
                </span>{" "}
                Pre-Save links
              </p>
              <p className="mb-3 flex items-center gap-2 animate-slide font-medium">
                <span className="text-xl">
                  <img src={micon} className="w-6 " alt="icon" />
                </span>{" "}
                Playlist submissions
              </p>
              <p className="mb-3 flex items-center gap-2 animate-slide font-medium">
                <span className="text-xl">
                  <img src={micon} className="w-6 " alt="icon" />
                </span>{" "}
                Custom label names
              </p>
              <p className="mb-3 flex items-center gap-2 animate-slide font-medium">
                <span className="text-xl">
                  <img src={micon2} className="w-6 " alt="icon" />
                </span>{" "}
                Automatic royalty splits
              </p>
              <p className="mb-3 flex items-center gap-2 animate-slide font-medium">
                <span className="text-xl">
                  <img src={micon2} className="w-6 " alt="icon" />
                </span>{" "}
                Royalty commission
              </p>
              <p className="mb-4 flex items-center gap-2 animate-slide font-medium">
                <span className="text-xl">
                  <img src={micon2} className="w-6 " alt="icon" />
                </span>{" "}
                Speed to Spotify
              </p>
              <p className="font-bold ml-8 text-2xl animate-slide">PRICE</p>
            </div>

            {/* STUDIOSPHERE Column */}
            <div className="plan-column black-bg text-white">
              <p className="font-bold text-2xl animate-slide plan-title">STUDIOSPHERE</p>
              
              <span className="feature-label hidden">Free Trial</span>
              <p className="mt-4 animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Unlimited releases</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Pre-Save links</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Playlist submissions</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Custom label names</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Automatic royalty splits</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Royalty commission</span>
              <p className="animate-slide font-medium feature-value mobile-spacer">0%</p>
              
              <span className="feature-label hidden">Speed to Spotify</span>
              <p className="animate-slide font-medium feature-value">1-3 Days</p>
              
              <p className="animate-slide mt-4 font-bold plan-price">$240/yr</p>
            </div>

            {/* ABC WEBSITE Column */}
            <div className="plan-column text-white">
              <p className="font-bold text-2xl animate-slide plan-title">ABC WEBSITE</p>
              
              <span className="feature-label hidden">Free Trial</span>
              <p className="mt-4 animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Unlimited releases</span>
              <p className="animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Pre-Save links</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Playlist submissions</span>
              <p className="animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Custom label names</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Automatic royalty splits</span>
              <p className="animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Royalty commission</span>
              <p className="animate-slide font-medium feature-value mobile-spacer">9%</p>
              
              <span className="feature-label hidden">Speed to Spotify</span>
              <p className="animate-slide font-medium feature-value">2-5 Days</p>
              
              <p className="mt-4 font-bold animate-slide plan-price">$9.99 per release</p>
            </div>

            {/* XYZ WEBSITE Column */}
            <div className="plan-column text-white">
              <p className="font-bold text-2xl animate-slide plan-title">XYZ WEBSITE</p>
              
              <span className="feature-label hidden">Free Trial</span>
              <p className="mt-4 animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Unlimited releases</span>
              <p className="animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Pre-Save links</span>
              <p className="animate-slide feature-value mobile-spacer">
                <img src={tick} className="w-7 mx-auto" alt="check" />
              </p>
              
              <span className="feature-label hidden">Playlist submissions</span>
              <p className="animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Custom label names</span>
              <p className="animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Automatic royalty splits</span>
              <p className="animate-slide feature-value mobile-spacer">✖</p>
              
              <span className="feature-label hidden">Royalty commission</span>
              <p className="animate-slide font-medium feature-value mobile-spacer">0%</p>
              
              <span className="feature-label hidden">Speed to Spotify</span>
              <p className="animate-slide font-medium feature-value">1-3 Days</p>
              
              <p className="mt-4 font-bold animate-slide plan-price">$7.99 per release</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studio;