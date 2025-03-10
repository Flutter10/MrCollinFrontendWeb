import React from "react";
import Capture from "../Components/record/Capture";
import Inspired from "../Components/record/Inspired";
import Music from "../Components/record/Music";
import TeamTrust from "../Components/Subscription/TeamTrust";
import Moment from "../Components/record/Moment";
import Frequently from "../Components/video/Frequently";
import TestimonialCarousel from "../Components/create/TestimonialCarousel";
import Advertise from "../Components/blog/Advertise";

function Record() {
  return (
    <div>
    <Capture/>
    <Inspired/>
    <Music/>
    <TeamTrust/>
    <Moment/>
    <TestimonialCarousel/>
    <Frequently/>
    <Advertise/>
    </div>
  );
}

export default Record;
