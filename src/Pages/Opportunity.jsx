import React from "react";
import Next from "../Components/opportunity/Next";
import Group from "../Components/opportunity/Group";
import OpportunitiesSection from "../Components/opportunity/OpportunitiesSection";
import Advertise from "../Components/blog/Advertise";
import TeamTrust1 from "../Components/promote/TeamTrust1";

function Opportunity() {
  return (
    <div>
      <Next />
      <TeamTrust1 />
      <Group/>
      <OpportunitiesSection/>
      <Advertise/>
    </div>
  );
}

export default Opportunity;
