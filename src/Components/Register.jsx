import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import close from "../assets/login/fontisto_close.png";
import Login from "./Login";
import { userService } from "../services/userService";


export default function Register({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Disable body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        password: formData.password,
      };

      const response = await userService.register(userData);
      console.log("Registration successful:", response);
      // Handle successful registration (e.g., show success message, redirect, etc.)
      // onClose(); // Close the modal on success
      setShowLogin(true)
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showLogin ? (
        <Login onClose={onClose} />
      ) : (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-[9999] overflow-y-auto">
          <div className="bg-white p-6 pt-10 rounded-2xl w-full sm:max-w-[28%] relative shadow-lg mx-1 my-4 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <button
              className="absolute top-3 right-3 cursor-pointer z-10 bg-white rounded-full p-1"
              onClick={onClose}
            >
              <img src={close} className="h-5 w-5" alt="Close" />
            </button>

            <div className="w-full lg:mb-6">
              <h1 className="font-['Orbitron'] font-bold text-2xl text-center">
                <p className="lg:text-3xl text-xl">Create an Account</p>
              </h1>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-['Orbitron'] font-bold lg:text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className="w-full p-2 bg-gray-100 rounded-md outline-none text-gray-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-['Orbitron'] font-bold lg:text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className="w-full p-2 bg-gray-100 rounded-md outline-none text-gray-500"
                    required
                  />
                </div>
              </div>

              <div className="">
                <label className="block font-['Orbitron'] font-bold lg:text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className="w-full p-2 bg-gray-100 rounded-md outline-none text-gray-500"
                  required
                />
              </div>

              <div className="">
                <label className="block font-['Orbitron'] font-bold lg:text-sm mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="bg-gray-100 p-2 rounded-l-md border-r border-gray-300 text-gray-500">
                    +91
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full p-2 bg-gray-100 rounded-r-md outline-none text-gray-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="block font-['Orbitron'] font-bold lg:text-sm mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full p-2 bg-gray-100 rounded-md outline-none text-gray-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 bg-gray-400 text-white rounded-full font-['Orbitron'] font-bold ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{ borderRadius: "9999px" }}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-300"></div>
                <p className="text-gray-400 text-sm whitespace-nowrap">
                  or continue with
                </p>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>

              <div className="flex justify-between gap-3 mb-2 lg:mb-3">
                <button
                  type="button"
                  className="flex-1 py-2.5 border border-gray-200 bg-[#3C4142]/13 rounded-full flex justify-center items-center"
                  style={{ borderRadius: "9999px" }}
                >
                  <FcGoogle size={24} />
                </button>
                <button
                  type="button"
                  className="flex-1 py-2.5 border border-gray-200 rounded-full bg-[#3C4142]/13 flex justify-center items-center"
                  style={{ borderRadius: "9999px" }}
                >
                  <FaFacebook size={24} color="#1877F2" />
                </button>
                <button
                  type="button"
                  className="flex-1 py-2.5 border border-gray-200 rounded-full bg-[#3C4142]/13 flex justify-center items-center"
                  style={{ borderRadius: "9999px" }}
                >
                  <FaApple size={24} />
                </button>
              </div>

              <p className="text-gray-500 text-xs lg:text-sm text-center">
                By continuing, you agree to SoundSparkHub's{" "}
                <a href="#" className="text-black font-bold">
                  Terms & conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-black font-bold">
                  Privacy Policy
                </a>
              </p>

              <p className="text-gray-400 text-sm text-center">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-black font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLoginClick();
                  }}
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}