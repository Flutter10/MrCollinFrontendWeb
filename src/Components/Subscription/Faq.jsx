import React from "react";
import faq from "../../assets/subscription/faq.png";
import "../../styles/subscription/faq.css";

const faqData = [
  { question: "What is this platform about?", answer: "This platform helps users learn and share knowledge through tutorials, blogs, and discussions." },
  { question: "How can I contribute?", answer: "You can contribute by writing blogs, answering questions, or creating tutorials." },
  { question: "Is this platform free to use?", answer: "Yes! This platform is completely free to use." },
  { question: "Can I ask questions here?", answer: "Absolutely! You can ask any technical or general questions." },
  { question: "Do I need an account to use this platform?", answer: "No, but having an account allows you to contribute and track progress." },
  { question: "How do I report inappropriate content?", answer: "You can report content using the 'Report' button on each post." },
  { question: "Can I edit my posts?", answer: "Yes, you can edit your posts from your profile page." },
  { question: "Is there a mobile version available?", answer: "Yes, the platform is fully responsive and works on all devices." },
  { question: "Can I get notifications for new posts?", answer: "Yes, you can enable notifications in your account settings." },
  { question: "How can I delete my account?", answer: "You can request account deletion from the settings page." },
  { question: "Are there any premium features?", answer: "No, all features are available for free to all users." },
  { question: "Who manages this platform?", answer: "The platform is managed by a community of developers and content creators." },
];

export default function Faq() {
  return (
    <div className="container-fluid gradient-bg my-5 py-lg-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4 py-3">
            <img src={faq} className="img-fluid" alt="FAQ" />
          </div>
          <div className="col-lg-8 border faq">
            <div className="accordion" id="faqAccordion">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
