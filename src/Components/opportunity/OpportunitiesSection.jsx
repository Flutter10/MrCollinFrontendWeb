import React from "react";
import bgimage from "../../assets/opportunity/icon.png";

const OpportunitiesSection = () => {
  return (
    <div className="lg:py-20 py-4 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-['Orbitron'] text-white mb-6">
          <p className="lg:text-4xl">Over 700 industry opportunities every year</p>
        </h2>

        {/* Description */}
        <p className="text-white font-['Orbitron'] lg:text-lg text-sm mb-16 max-w-6xl mx-auto">
          Gain exposure and make some money at the same time with placements in
          movies, TV, and commercials. Perform at festivals - so many to choose
          from on a regional, national, and even international level.
        </p>

        {/* Logo Grid */}
        <div className="lg:mt-16">
          <div className=" flex  ">
            <img src={bgimage} className="w-full h-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesSection;
