import React from "react";
import Studio from "../Components/about/Studio";
import Expertise from "../Components/about/Expertise";
import Advertise from "../Components/blog/Advertise";
import Content from "../Components/about/Content";

function About() {
  return (
    <div>
      <Studio />
      <Content/>
      <Advertise />
    </div>
  );
}

export default About;
