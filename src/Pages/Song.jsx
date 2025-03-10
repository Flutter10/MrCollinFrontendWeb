import React from "react";
import Emotion from "../Components/song/Emotion";
import TeamTrust from "../Components/Subscription/TeamTrust";
import Timeless from "../Components/song/Timeless";
import Written from "../Components/song/Written";
import Feelings from "../Components/song/Feelings";
import TestimonialCarousel from "../Components/create/TestimonialCarousel";
import Frequently from "../Components/video/Frequently";
import Advertise from "../Components/blog/Advertise";

function Song() {
  return (
    <div>
      <Emotion />
      <TeamTrust/>
      <Timeless/>
      <Written/>
      <Feelings/>
      <TestimonialCarousel/>
      <Frequently/>
      <Advertise/>
    </div>
  );
}

export default Song;
