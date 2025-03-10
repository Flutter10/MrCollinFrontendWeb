import React from "react";
import bgimage from "../../assets/promote/Group.png";

const CampaignSection = () => {
  const adTypes = [
    "Feedback Ads",
    "Story Ads",
    "Feed Ads",
    "Playable Ads",
    "News Feed Ads",
    "Streaming Ads",
    "Geo-Targeted Ads",
  ];

  return (
    <div className="min-h-screen flex items-center p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image placeholder with custom shape */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative ">
            <img src={bgimage} alt="Campaign" className="w-full h-full " />
          </div>
        </div>

        {/* Content section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold  font-['Orbitron']">
            <p className="text-yellow-400">
              A custom campaign that hits all targets
            </p>
          </h1>

          <p className="text-white text-lg font-['Orbitron']">
            Give us your release details and we'll handle all the heavy lifting,
            designing a personalized campaign that's impossible to ignore.
          </p>

          {/* Tags container */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {adTypes.map((type, index) => (
              <span
                key={index}
                className="lg:px-4 py-2 px-3 bg-[#DDDDDD] rounded-full text-black text-sm font-['Orbitron']"
              >
                {type}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="mt-8 px-8 py-3 bg-white text-black rounded-full font-bold transition-colors font-['Orbitron']"
            style={{ borderRadius: "9999px" }}
          >
            Make An Impact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignSection;
