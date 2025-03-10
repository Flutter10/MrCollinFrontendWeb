import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import bgimage from "../../assets/video/frequently.png";

const Frequently = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Is there an export limit?",
      answer:
        "No, there’s no export limit. With Studiosphere 360, you can export your projects as many times as you need without any restrictions—enabling you to fine-tune and share your work without compromise.",
    },
    {
      id: 2,
      question: "What is a Brand Kit?",
      answer:
        "A Brand Kit is your creative identity toolkit. It includes your logo, color palettes, fonts, and style guidelines, ensuring that every project you share reflects your unique sound and aesthetic consistently across all platforms.",
    },
    {
      id: 3,
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. Our subscription model is built for flexibility. You can cancel your membership at any time without any long-term commitments or hidden cancellation fees",
    },
    {
      id: 4,
      question:
        "Do you charge for multiple users, and will I receive receipts for transactions?",
      answer:
        "Studiosphere 360 is designed for collaboration. We offer support for multiple users within your team without additional charges beyond your subscription. Plus, every transaction comes with a detailed receipt, so you always know what you’re paying for.",
    },
    {
      id: 5,
      question: "What is your refund policy?",
      answer:
        "We stand behind the quality of our services. If you’re not satisfied, we offer refunds in accordance with our clear and transparent refund policy. Typically, refunds are available within a specified period after purchase, subject to the outlined conditions on our website.",
    },
    {
      id: 6,
      question: "[Additional Questions]",
      answer:
        "If you have any further questions or need additional support, our dedicated customer service team is ready to help. Just reach out via our support channels, and we’ll make sure you have all the information you need.",
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="relative w-full lg:min-h-[70vh]">
      {/* Background placeholder - replace with your actual image */}
      <div className="absolute inset-0">
        <img
          src={bgimage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full py-8">
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-center items-start gap-8">
          {/* Title */}
          <div className="md:w-1/3 md:sticky md:top-8">
            <h2
              className="text-6xl font-bold text-white mb-8"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              <p className="text-5xl">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </p>
            </h2>
          </div>

          {/* FAQ List */}
          <div
            className="md:w-2/3 border backdrop-blur-sm rounded-xl px-6 max-h-[70vh] overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)",
            }}
          >
            {questions.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-700 last:border-0"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full py-4 flex justify-between items-center text-left text-white hover:text-gray-300 transition-colors"
                >
                  <span className="text-md pr-8">{item.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 transition-transform duration-200
                      ${openQuestion === item.id ? "rotate-180" : ""}`}
                  />
                </button>

                {openQuestion === item.id && (
                  <div className="pb-4 text-gray-300 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
