import React from "react";
import craft from "../../assets/peer/port.png";
import arrow from "../../assets/create/arrow.png";

function Seamlessly() {
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
            padding: 0 36px;
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
            background-color: #f9d94c; /* Dark pink color */
            color: black;
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
              height: 34px;
              padding: 0 20px;
              font-size: 14px;
            }
          }
        `}
      </style>
      <div className="relative h-[80vh] w-full">
        <img src={craft} alt="craft" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:px-16 lg:py-4">
          <div className="space-y-4 ">
            <h1 className="text-white font-['Orbitron'] text-6xl ">
              <p className="lg:text-5xl text-4xl">
                Collaborate
                <br />
                Seamlessly
                <br />
                Create Limitlessly.
              </p>
            </h1>

            <p className="text-white lg:text-sm text-[10px] font-['Orbitron'] ">
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
              what truly matters: your art. With Studiosphere 360, you’re not
              just creating music—you’re setting the stage for your legacy.
              Create today and see your vision transform the world tomorrow{" "}
            </p>

            {/* Try Now Button */}
            <div className="pt-8">
              <button className="create-button">
                <span className="font-medium  text-xl">Try Now</span>
                <img src={arrow} alt="arrow" className=" ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seamlessly;
