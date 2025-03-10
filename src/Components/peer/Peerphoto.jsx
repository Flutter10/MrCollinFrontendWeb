import React from "react";
import peer from "../../assets/peer/peer.png";

function Peerphoto() {
  return (
    <div className="flex flex-col">
      <div className="lg:mt-14">
        <h1
          className="text-2xl  lg:text-5xl text-white text-center lg:mb-16"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          <p className="text-xl lg:text-4xl"> Peer to Peer Collaboration</p>
        </h1>{" "}
      </div>
      <div className=" lg:mt-72 lg:h-[600px] mt-8  flex items-center justify-center">
        <img src={peer} />
      </div>
    </div>
  );
}

export default Peerphoto;
