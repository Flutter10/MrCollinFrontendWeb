import React, { useState } from "react";
import close from "../assets/login/fontisto_close.png";
import rotatingCd from "../assets/home/Exclude.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function NewPassword({ onClose }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password validation and submission logic here
    // If passwords match and meet requirements, proceed
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-[9999] overflow-y-auto">
      <div className="bg-white p-6 pt-10 rounded-2xl w-full sm:max-w-[420px] relative shadow-lg mx-1 my-4 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 cursor-pointer z-10"
          onClick={onClose}
        >
          <img src={close} className="h-5 w-5" alt="Close" />
        </button>

        <div className="w-full mb-6">
          <h1 className="font-['Orbitron'] font-bold text-2xl text-center mb-0">
            <p className="text-2xl font-bold mb-0">Enter New Password</p>
          </h1>

          <div className="flex justify-center items-end mt-0">
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
        </div>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="block font-['Orbitron'] font-bold text-lg mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2 bg-gray-100 rounded-md outline-none text-gray-500 pr-10"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-['Orbitron'] font-bold text-lg mb-2">
              Re-enter Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2 bg-gray-100 rounded-md outline-none text-gray-500 pr-10"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gray-400 text-white rounded-full font-['Orbitron'] font-bold mb-6"
            style={{borderRadius:"9999px"}}
          >
            Confirm
          </button>

          <p className="text-gray-500 text-sm text-center mt-3">
            By continuing, you agree to SoundSparkHub's{" "}
            <a href="#" className="text-black font-bold">
              Terms & conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-black font-bold">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
