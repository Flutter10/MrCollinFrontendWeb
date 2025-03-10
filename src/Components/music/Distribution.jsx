import React, { useEffect, useRef } from "react";
import circle from "../../assets/music/add.png";
import circle2 from "../../assets/music/add1.png";
import circle3 from "../../assets/music/add2.png";
import circle4 from "../../assets/music/add3.png";

const Distribution = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

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
    [section1Ref, section2Ref, section3Ref, section4Ref].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [section1Ref, section2Ref, section3Ref, section4Ref].forEach((ref) => {
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
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .section-flex {
        flex-direction: column !important;
      }
      
      .section-image {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;
      }
      
      .section-content {
        text-align: center;
      }
      
      .section-ml-0 {
        margin-left: 0 !important;
      }
      
      .section-right .section-image {
        order: 1;
      }
      
      .section-right .section-content {
        order: 2;
      }
    }
  `}
      </style>
      <div className="bg-black min-h-screen px-4 sm:px-8 py-8 sm:py-16">
        <div className="max-w-[90%] mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl flex justify-center font-['Orbitron'] text-white mb-10 sm:mb-20">
            <p className="text-3xl sm:text-5xl text-center">
              <span className="text-white">
                Music distribution in 4 easy steps
              </span>
            </p>
          </h1>

          {/* Sections */}
          <div className="space-y-12 sm:space-y-8">
            {/* Section 1 - Image Left */}
            <div ref={section1Ref} className="flex flex-col">
              <div className="flex section-flex">
                <div className="section-image">
                  <img
                    src={circle}
                    className="w-[80%] "
                    alt="rotating circle"
                  />
                </div>
                <div className="flex flex-col justify-center section-content">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-['Orbitron'] text-white mb-2">
                    <span className="text-[#7CFF01] ml-0 sm:ml-8 section-ml-0">
                      Add your music
                    </span>
                  </h2>
                  <p className="text-gray-300 max-w-3xl ml-0 sm:ml-8 section-ml-0 text-base sm:text-xl mb-4 sm:mb-8 leading-relaxed font-['Orbitron']">
                    1. Create: Start by recording and perfecting your track
                    using our all-in-one production tools.
                    <br />
                    2. Submit: Upload your finalized music to our platform where
                    it's prepped for distribution. <br />
                    3. Distribute: We send your track to all major streaming
                    platforms, ensuring your music is heard worldwide.
                    <br />
                    4. Promote: Leverage our targeted campaigns to boost
                    visibility and connect with your ideal audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 - Image Right */}
            <div ref={section2Ref} className="">
              <div className="flex justify-between section-flex section-right">
                <div className="flex flex-col justify-center section-content">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-['Orbitron'] mb-2">
                    <span className="text-[#FC5252]">Enter your details</span>{" "}
                  </h2>

                  <p className="text-gray-300 mb-4 sm:mb-8 max-w-4xl text-base sm:text-xl leading-relaxed font-['Orbitron']">
                    1. Sign Up or Log In: Begin by creating your account or
                    logging into your existing profile on Studiosphere 360.
                    <br />
                    2. Access the Dashboard: Once logged in, navigate to your
                    dashboard where you’ll find a clear “Get Started” button for
                    new projects.
                    <br />
                    3. Enter Your Project Details: Click on the “Enter Your
                    Details” section. Fill out the form with essential
                    information about your project, including: o Project Title &
                    Description: Briefly describe your music or creative
                    project. o Genre & Style: Indicate your musical genre and
                    any unique stylistic elements. o Goals & Vision: Share your
                    creative vision and what you aim to achieve. o Timeline &
                    Milestones: Outline key dates and deliverables for your
                    project.
                    <br />
                    4. Upload Files: Add your audio, video, or visual assets by
                    uploading directly within the platform. This ensures all
                    elements of your project are stored in one place.
                    <br />
                    5. Review & Submit: Once all details are entered, review
                    your submission for accuracy. Then click “Submit” to
                    officially launch your project on Studiosphere 360.
                    <br />
                    6. Get Started: After submission, our team will guide you
                    through the next steps, from production to promotion and
                    distribution, ensuring your creative vision is fully
                    realized.
                  </p>
                </div>
                <div className="flex justify-center sm:justify-end section-image">
                  <img src={circle2} className="w-[80%] " alt="enter details" />
                </div>
              </div>
            </div>

            {/* Section 3 - Image Left */}
            <div ref={section3Ref} className="flex flex-col">
              <div className="flex section-flex">
                <div className="section-image">
                  <img
                    src={circle3}
                    className="w-[80%] "
                    alt="release your music"
                  />
                </div>
                <div className="flex flex-col justify-center section-content">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-['Orbitron'] text-white mb-2">
                    <span className="text-[#7CFF01] ml-0 sm:ml-8 section-ml-0">
                      Release your music
                    </span>
                  </h2>
                  <p className="text-gray-300 max-w-3xl ml-0 sm:ml-8 section-ml-0 text-base sm:text-xl mb-4 sm:mb-8 leading-relaxed font-['Orbitron']">
                  With Studiosphere 360, releasing your music is a seamless experience that maximizes your creative reach. Once your track is polished and ready, our platform takes over by launching it across all major streaming platforms. This means your music is instantly accessible to a global audience, giving you the exposure you deserve. The benefit? You save time and resources by managing the entire release process in one place—so you can focus on what you do best: creating. Studiosphere 360 empowers you to not only distribute your sound widely but also to connect with fans and industry professionals eager to discover fresh talent.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 - Image Right */}
            <div ref={section4Ref} className="">
              <div className="flex justify-between section-flex section-right">
                <div className="flex flex-col justify-center section-content">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-['Orbitron'] mb-2">
                    <span className="text-[#B47BFF]">Earn from your music</span>{" "}
                  </h2>

                  <p className="text-gray-300 mb-4 sm:mb-8 max-w-4xl text-base sm:text-xl leading-relaxed font-['Orbitron']">
                  Studiosphere 360 empowers artists to turn passion into profit. With our all-in-one platform, you can monetize your music through digital sales, streaming royalties, and licensing opportunities—all managed from a single dashboard. Our robust data monitoring system gives you real-time insights into your earnings, audience engagement, and distribution performance. This means you can track every dollar made, identify which platforms or promotions work best, and adjust your strategy on the fly. By taking control of your music's earning potential, you not only maximize your revenue but also ensure that your creative vision thrives in a data-driven, sustainable ecosystem.
                  </p>
                </div>
                <div className="flex justify-center sm:justify-end section-image">
                  <img
                    src={circle4}
                    className="w-[80%] "
                    alt="earn from music"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Distribution;
