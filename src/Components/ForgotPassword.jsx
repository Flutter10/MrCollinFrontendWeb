import React, { useState } from "react";
import close from "../assets/login/fontisto_close.png";
import logo from "../assets/login/logo.png";
import "../styles/register.css";
import rotatingCd from "../assets/home/Exclude.png";
import Otp from "./Otp";

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowOtp(true);
    }
  };

  return (
    <>
      {showOtp ? (
        <Otp onClose={onClose} email={email} />
      ) : (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={onClose}>
              <img src={close} className="close_btn_icons" />
            </button>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <form className="forgot-password-form">
                    <div className="d-flex justify-content-center align-items-center">
                      <h1 className="forgot-password-heading">
                        <p className="text-2xl font-bold mb-0">Forgot Password?</p>
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
                    <p className="text-center text-gray-400 text-sm">
                      To reset your password, please enter the email address associated with your account
                    </p>
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-control py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="d-grid py-2">
                      <button 
                        className="py-2 mt-3 bg-gray-400 login_form_btn" 
                        onClick={handleSendOtp}
                        type="button"
                      >
                        Send OTP
                      </button>
                    </div>
                    <div className="flex justify-center items-center mt-3 ">
                      <p className="text-gray-500 text-xs text-center ">
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
                    <div className="d-flex justify-content-center no-underline align-items-center">
                      <a className="text-black no-underline" onClick={onClose}>
                        Back to Login
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}