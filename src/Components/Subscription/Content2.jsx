import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  .font-quicksand {
    font-family: 'Quicksand', sans-serif;
  }
  
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
  
  /* Mobile styles */
  @media (max-width: 768px) {
    .mobile-scroll-container {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
    }
    
    .mobile-scroll-container::-webkit-scrollbar {
      display: none;
    }
    
    .mobile-min-width {
      min-width: 700px;
    }
    
    .mobile-section-title {
      position: sticky;
      left: 0;
      background-color: black;
      z-index: 20;
    }
    
    .mobile-feature-name {
      position: sticky;
      left: 0;
      background-color: black;
      z-index: 20;
      width: 200px;
    }
    
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }
    
    .accordion-content.open {
      max-height: 1000px;
    }
  }
`;

const Content2 = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      cta: "Go Free",
      ctaClass: "border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300",
    },
    {
      name: "Bronze Plan",
      price: "$20",
      period: "/mo. per user",
      cta: "Go Bronze",
      ctaClass: "border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300",
    },
    {
      name: "Gold Plan",
      price: "$30",
      period: "/mo. per user",
      cta: "Go Gold",
      ctaClass: "bg-[#FFD700] text-black rounded-xl hover:bg-[#FFE44D] transition-all duration-300",
    },
    {
      name: "Platinum Plan",
      price: "$45",
      period: "/mo. per user",
      cta: "Go Platinum",
      ctaClass: "border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300",
    },
  ];
  
  const sections = [
    {
      title: "Video creation",
      features: [
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: "720p",
          gold: "1080p",
          platinum: "4k",
        },
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: "720p",
          gold: "4k",
          platinum: "4k",
        },
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: "2 times",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: "2GB",
          gold: "5GB",
          platinum: "50GB",
        },
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: "1GB",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: "-",
          gold: true,
          platinum: true,
        },
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: "Limited",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
        {
          name: "Lorem Ipsum",
          free: "-",
          bronze: true,
          gold: true,
          platinum: true,
        },
      ],
    },
    {
      title: "Music Creation",
      features: [
        {
          name: "Lorem ipsum",
          free: "720p",
          bronze: "1080p",
          gold: "15GB",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "2 Codes",
          bronze: "10GB",
          gold: "15GB",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "5GB",
          bronze: "10GB",
          gold: "15GB",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "Limited",
          bronze: "Unlimited",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: false,
          bronze: true,
          gold: true,
          platinum: true,
        },
      ],
    },
    {
      title: "Marketing",
      features: [
        {
          name: "Lorem ipsum",
          free: "720p",
          bronze: "1080p",
          gold: "4k",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "5GB",
          bronze: "10GB",
          gold: "15GB",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "NA",
          bronze: "Unlimited",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "Limited",
          bronze: "Unlimited",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
      ],
    },
    {
      title: "Song Writing",
      features: [
        {
          name: "Lorem ipsum",
          free: "720p",
          bronze: "1080p",
          gold: "4k",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "2 Codes",
          bronze: "Unlimited",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "5GB",
          bronze: "10GB",
          gold: "15GB",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "Limited",
          bronze: "Unlimited",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
      ],
    },
    {
      title: "Recording Music",
      features: [
        {
          name: "Lorem ipsum",
          free: "720p",
          bronze: "1080p",
          gold: "15GB",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: "2 Codes",
          bronze: "Unlimited",
          gold: "Unlimited",
          platinum: "Unlimited",
        },
        {
          name: "Lorem ipsum",
          free: false,
          bronze: true,
          gold: true,
          platinum: true,
        },
        {
          name: "Lorem ipsum",
          free: false,
          bronze: true,
          gold: true,
          platinum: true,
        },
      ],
    },
  ];

  const renderCell = (value) => {
    if (value === true)
      return <Check className="w-4 h-4 text-green-500 mx-auto" />;
    if (value === false)
      return <Check className="w-4 h-4 text-red-500 mx-auto" />;
    return <span className="text-md">{value}</span>;
  };
  
  // Mobile plan selector
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Bronze
  
  return (
    <>
      <style>{styles}</style>

      <div className="bg-black pt-16">
        {/* Desktop View - Fixed Header */}
        <div className="sticky top-26 z-40 w-full bg-black px-4 border-b border-gray-800 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-end">
            <div className="w-4/5 grid grid-cols-4 gap-4 py-4">
              {plans.map((plan, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="">
                    <p className="text-white text-lg font-medium font-quicksand mb-0">{plan.name}</p>
                  </h3>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-gray-400 font-quicksand font-medium text-sm">{plan.price}</span>
                    <span className="text-gray-400 font-quicksand font-medium text-sm">{plan.period}</span>
                  </div>
                  <button
                    className={`mt-2 px-6 py-2 rounded-xl text-white font-inter font-medium ${plan.ctaClass}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Plan Selector */}
        <div className="md:hidden sticky top-24 z-40 w-full bg-black px-4 border-b border-gray-800">
          <div className="py-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white text-lg font-medium font-quicksand">Select Plan</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {plans.map((plan, index) => (
                <button
                  key={index}
                  className={`px-3 py-2 rounded-xl text-sm font-medium font-inter ${
                    selectedPlan === index 
                      ? index === 2 ? "bg-[#FFD700] text-black" : "bg-white text-black" 
                      : "border border-gray-600 text-white"
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  <div className="text-center">{plan.name}</div>
                  <div className="text-center text-xs">{plan.price}{plan.period}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content - Desktop View */}
        <div className="max-w-7xl mx-auto hidden md:block">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <div className="border-b border-gray-800 py-4">
                <h3 className="text-red-500 text-md font-semibold">
                  <p className="font-medium font-quicksand text-[#FC5252] text-lg">{section.title}</p>
                </h3>
              </div>

              {section.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="grid grid-cols-5 py-4 border-b border-gray-800"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-[#FC5252] font-medium font-quicksand">{feature.name}</span>
                  </div>
                  <div className="text-center text-[#FC5252] font-medium font-quicksand">
                    {renderCell(feature.free)}
                  </div>
                  <div className="text-center text-[#CE8946] font-medium font-quicksand">
                    {renderCell(feature.bronze)}
                  </div>
                  <div className="text-center text-[#FFD700] font-medium font-quicksand">
                    {renderCell(feature.gold)}
                  </div>
                  <div className="text-center text-[#E5E4E2] font-medium font-quicksand">
                    {renderCell(feature.platinum)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Content - Mobile View with Accordion */}
        <div className="md:hidden px-4">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <div 
                className="border-b border-gray-800 py-4  flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(sectionIndex)}
              >
                <h3 className="text-[#FC5252] font-medium   font-quicksand text-lg">
                <p className="text-[#FC5252] font-medium">{section.title}</p></h3>
                {openSections[sectionIndex] ? (
                  <ChevronUp className="w-6 h-6 text-[#FC5252]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#FC5252]" />
                )}
              </div>

              <div className={`accordion-content ${openSections[sectionIndex] ? 'open' : ''}`}>
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="py-3 border-b border-gray-800"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-[#FC5252] font-medium font-quicksand">{feature.name}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center justify-between px-3 py-2 bg-gray-900 rounded-lg">
                        <span className="text-gray-400 font-quicksand text-sm">Current Plan</span>
                        <span className={`font-medium font-quicksand text-sm ${
                          selectedPlan === 0 ? "text-[#FC5252]" :
                          selectedPlan === 1 ? "text-[#CE8946]" :
                          selectedPlan === 2 ? "text-[#FFD700]" : "text-[#E5E4E2]"
                        }`}>
                          {selectedPlan === 0 ? renderCell(feature.free) :
                           selectedPlan === 1 ? renderCell(feature.bronze) :
                           selectedPlan === 2 ? renderCell(feature.gold) : 
                           renderCell(feature.platinum)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between px-3 py-2 bg-gray-900 rounded-lg">
                        <span className="text-gray-400 font-quicksand text-sm">Upgrade to</span>
                        <span className={`font-medium font-quicksand text-sm ${
                          selectedPlan === 0 ? "text-[#CE8946]" :
                          selectedPlan === 1 ? "text-[#FFD700]" :
                          "text-[#E5E4E2]"
                        }`}>
                          {selectedPlan === 0 ? renderCell(feature.bronze) :
                           selectedPlan === 1 ? renderCell(feature.gold) :
                           selectedPlan === 2 ? renderCell(feature.platinum) : "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Alternative Mobile - Horizontal Scroll */}
        <div className="md:hidden px-4 mt-6 hidden">
          <div className="mobile-scroll-container">
            <div className="mobile-min-width">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <div className="border-b border-gray-800 py-4 mobile-section-title">
                    <h3 className="font-medium font-quicksand text-[#FC5252] text-lg">{section.title}</h3>
                  </div>

                  {section.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="grid grid-cols-5 py-4 border-b border-gray-800"
                    >
                      <div className="flex items-center gap-2 mobile-feature-name">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-[#FC5252] font-medium font-quicksand">{feature.name}</span>
                      </div>
                      <div className="text-center text-[#FC5252] font-medium font-quicksand">
                        {renderCell(feature.free)}
                      </div>
                      <div className="text-center text-[#CE8946] font-medium font-quicksand">
                        {renderCell(feature.bronze)}
                      </div>
                      <div className="text-center text-[#FFD700] font-medium font-quicksand">
                        {renderCell(feature.gold)}
                      </div>
                      <div className="text-center text-[#E5E4E2] font-medium font-quicksand">
                        {renderCell(feature.platinum)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;