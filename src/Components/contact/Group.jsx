import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import backgroundImage from "../../assets/contact/Group.png";

const Group = () => {
  const [formData, setFormData] = useState({
    name: "",
    looking: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="p-4 md:p-26 pt-20 md:pt-40">
      <div
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Container for the form and contact info */}
        <div className="container mx-auto px-4 h py-8 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
            {/* Left Section - Form */}
            <div className="w-full md:w-3/5 p-8 md:p-16 h-full rounded-3xl bg-white md:bg-transparent">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-['Orbitron'] text-black mb-2">
                  Say Hi!
                </h1>
                <p className="text-xl md:text-2xl text-[#67748E] font-normal mb-6 md:mb-8 font-['Orbitron']">
                  We'd like to talk with you.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm text-[#252F40] mb-2 font-['Orbitron']"
                    >
                      My name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md text-[#495057] font-normal focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="looking"
                      className="block text-sm text-[#252F40] mb-2 font-['Orbitron']"
                    >
                      I'm looking
                    </label>
                    <input
                      type="text"
                      id="looking"
                      name="looking"
                      placeholder="What you love"
                      value={formData.looking}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 text-xl text-[#495057] font-normal rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm text-[#252F40] mb-2 font-['Orbitron']"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="I want to say that..."
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full p-3 border border-gray-300 rounded-md text-[#495057] font-normal focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>

                  <div className="flex justify-end ">
                    <button
                      type="submit"
                      className="bg-gray-800 text-white py-2 px-10 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 font-['Orbitron'] text-sm"
                      style={{ borderRadius: "999px" }}
                    >
                      <p className="mb-0 mt-0">SEND</p>
                      <p className="mt-0 mb-0">MESSAGE</p>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Section - Contact Information */}
            <div className="w-full md:w-2/5 mt-0 p-6 md:p-10 text-white bg-gray-800 md:bg-transparent rounded-b-3xl md:rounded-b-none">
              <div className="h-full flex flex-col justify-center md:ml-20">
                <h2 className="text-2xl md:text-3xl font-['Orbitron'] mb-1 md:mb-6">
                  Contact Information
                </h2>
                <p className="mb-1 md:mb-8 text-white font-normal font-['Orbitron'] text-sm md:text-base">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>

                <div className="space-y-4 mb-1 md:mb-12 md:ml-4">
                  <p className="font-light font-['Orbitron'] text-sm md:text-base break-words">
                    +40 712 123 232
                  </p>
                  <p className="font-['Orbitron'] font-light text-sm md:text-base break-words">
                    hello@creative-tim.com
                  </p>
                  <p className="font-['Orbitron'] font-light text-sm md:text-base break-words">
                    Dyonisie Wolf Bucharest, RO 010458
                  </p>
                </div>

                <div className="flex space-x-4 md:space-x-6">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <FaFacebookF size={16} className="md:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <FaTwitter size={16} className="md:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <FaDribbble size={16} className="md:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <FaInstagram size={16} className="md:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;