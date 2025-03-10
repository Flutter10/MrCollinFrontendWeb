import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import rotatingCd from "../assets/home/Exclude.png";
import close from "../assets/login/fontisto_close.png";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ForgotPassword from "./ForgotPassword";
import Register from "./Register";
import SuccessModal from "./SuccessModal";

export default function Login({ onClose }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Handler for Sign up link click
  const handleSignUpClick = () => {
    setShowRegister(true);
  };

  // Handler for Login button click
  const handleLoginClick = () => {
    setShowSuccess(true);
  };

  return (
    <>
      {showForgotPassword ? (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      ) : showRegister ? (
        <Register onClose={onClose} />
      ) : showSuccess ? (
        <SuccessModal onClose={onClose} />
      ) : (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-[9999] overflow-y-auto">
          <div className="bg-white p-3 rounded-lg w-full max-w-md relative shadow-lg mx-1 my-4 max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 rounded-full border-none cursor-pointer z-10"
              onClick={onClose}
            >
              <img src={close} className="h-6" alt="Close" />
            </button>

            <div className="container mx-auto">
              <div className="w-full">
                <form className="px-2 py-1">
                  <div className="flex justify-center items-center">
                    <h1 className="font-['Orbitron'] font-bold text-2xl ">
                      <p className="text-2xl font-bold ">Welcome Back to</p>
                    </h1>
                  </div>

                  <div className="flex justify-center items-end">
                    <p className="text-2xl font-bold">STUDIOSPHERE</p>
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={rotatingCd}
                        className="rounded-full"
                        alt="Studio Logo"
                        style={{
                          animation: "rotate 8s linear infinite",
                        }}
                      />{" "}
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="block font-['Orbitron'] font-bold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 bg-[#EDEDED] rounded outline-none"
                    />
                  </div>

                  <div className="mb-2 relative">
                    <label className="block font-['Orbitron'] font-bold mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full p-2 bg-[#EDEDED] rounded outline-none pr-10"
                      />
                      <span
                        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 text-lg"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center ">
                    <a
                      className="cursor-pointer"
                      onClick={() => setShowForgotPassword(true)}
                    >
                      <p className="text-gray-400 underline">
                        Forgot Password?
                      </p>
                    </a>
                  </div>

                  <div className="mb-3 ">
                    <button
                      className="w-full py-2 bg-gray-400 text-white rounded-full"
                      type="button"
                      style={{ borderRadius: "9999px" }}
                      onClick={handleLoginClick}
                    >
                      Login
                    </button>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-sm text-gray-500 whitespace-nowrap">
                      or continue with
                    </span>
                    <div className="flex-1 h-px bg-gray-300"></div>
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

                  <div className="flex justify-center items-center mb-2">
                    <p className="text-gray-500 text-xs lg:text-sm text-center ">
                      By continuing, you agree to SoundSparkHub's{" "}
                      <a href="#" className="text-black font-bold">
                        Terms & conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-black font-bold">
                        Privacy Policy
                      </a>
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="text-gray-400 text-sm text-center">
                      Don't have an account?{" "}
                      <a
                        href="#"
                        className="text-black font-bold"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSignUpClick();
                        }}
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}