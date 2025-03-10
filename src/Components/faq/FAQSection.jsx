import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 px-6 flex justify-between items-center text-left font-extralight text-white transition-colors"
        onClick={onClick}
      >
        <span>{question}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-4 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "1. What is Studiosphere 360?",
      answer:
        "Studiosphere 360 is an all-in-one creative ecosystem for music creators. It’s designed to empower producers, songwriters, engineers, and artists with integrated tools for production, collaboration, mastering, and distribution—all in one seamless platform",
    },
    {
      question: "2. How does Studiosphere 360 integrate with my DAW?",
      answer:
        "No matter which DAW you use—Ableton, Pro Tools, Logic, FL Studio, or others—Studiosphere 360 is built to work with your existing setup. Its tools plug right into your workflow, offering the flexibility and control you need without forcing you to change how you work.",
    },
    {
      question: "3. What services are included in Studiosphere 360?",
      answer: (
        <div>
          <p>The platform offers a wide array of services, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>DAW Integration:</strong> Create and refine your music on
              any digital audio workstation.
            </li>
            <li>
              <strong>AI-Powered Songwriting:</strong> Transform your emotions
              into lyrics with cutting-edge AI.
            </li>
            <li>
              <strong>Fast Quality Online Mastering:</strong> Get
              professional-grade mastering quickly.
            </li>
            <li>
              <strong>Collaboration Tools:</strong> Connect and create in real
              time with other industry professionals.
            </li>
            <li>
              <strong>Instant Distribution:</strong> Share your music globally
              in record time.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. What is the Studiosphere 360 Gold package?",
      answer:
        "The Gold package is the premium membership that unlocks the full potential of the platform. It includes advanced collaboration features, extended creative tools, enhanced project management, and a direct connection to a network of top-tier songwriters, producers, engineers, and artists.",
    },
    {
      question: "5. How does online mastering work on Studiosphere 360?",
      answer:
        "The online mastering service is built for speed and quality. Once you upload your track, our algorithm-driven mastering engine processes your audio to deliver a polished, studio-grade finish without the lengthy turnaround times of traditional mastering services.",
    },
    {
      question:
        "6. Can I collaborate with other music professionals on the platform?",
      answer:
        "Absolutely. Studiosphere 360 is designed to break down creative barriers. Its real-time collaboration tools enable you to work with songwriters, producers, engineers, and artists from around the globe, ensuring a dynamic, creative environment where ideas can flow freely.",
    },
    {
      question: "7. Is Studiosphere 360 mobile-friendly?",
      answer:
        "Yes, the platform is designed for creators on the go. Whether you’re capturing ideas in a café or working on a project during a commute, Studiosphere 360’s mobile compatibility ensures you never miss a beat.",
    },
    {
      question: "8. How does Studiosphere Open AI enhance my musical journey?",
      answer:
        "Studiosphere Open AI helps you discover new trends, ideas, and resources tailored to your musical interests. By leveraging advanced AI, it offers personalized insights and recommendations that keep you ahead of the curve in the ever-evolving music industry.",
    },
    {
      question: "9. What kind of support is available if I need help?",
      answer:
        "Studiosphere 360 provides robust customer support, including online help centers, detailed tutorials, and direct access to expert advisors. Whether you’re troubleshooting a technical issue or looking for creative inspiration, support is just a click away.",
    },
    {
      question: "10. How secure is my work on Studiosphere 360?",
      answer:
        "Your creative projects are safeguarded with top-tier security measures. Studiosphere 360 employs state-of-the-art data encryption and secure cloud storage to ensure that your intellectual property remains protected at every step of your creative journey.",
    },
    {
      question: "11.Is there an export limit?",
      answer:
        "No, there’s no export limit. With Studiosphere 360, you can export your projects as many times as you need without any restrictions—enabling you to fine-tune and share your work without compromise.",
    },
    {
      question: "12.What is a Brand Kit?",
      answer:
        "A Brand Kit is your creative identity toolkit. It includes your logo, color palettes, fonts, and style guidelines, ensuring that every project you share reflects your unique sound and aesthetic consistently across all platforms.",
    },
    {
      question: "13.Can I cancel anytime?",
      answer:
        "Absolutely. Our subscription model is built for flexibility. You can cancel your membership at any time without any long-term commitments or hidden cancellation fees.",
    },
    {
      question:
        "14.Do you charge for multiple users, and will I receive receipts for transactions?",
      answer:
        "Studiosphere 360 is designed for collaboration. We offer support for multiple users within your team without additional charges beyond your subscription. Plus, every transaction comes with a detailed receipt, so you always know what you’re paying for.",
    },
    {
      question: "15.What is your refund policy?",
      answer:
        "We stand behind the quality of our services. If you’re not satisfied, we offer refunds in accordance with our clear and transparent refund policy. Typically, refunds are available within a specified period after purchase, subject to the outlined conditions on our website.",
    },
    {
      question: "16.[Additional Questions]",
      answer:
        "If you have any further questions or need additional support, our dedicated customer service team is ready to help. Just reach out via our support channels, and we’ll make sure you have all the information you need.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-4 lg:px-4">
      <div className="max-w-[90%] mx-auto">
        <h1 className="text-4xl text-center font-['Orbitron'] mb-12">
          <p className="text-[#ACBDFF]">Frequently Asked Questions</p>
        </h1>

        <div className="bg-opacity-40 rounded-lg border mt-10 border-gray-700 overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleQuestion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
