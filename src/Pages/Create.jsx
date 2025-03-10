import React from "react";
import Create1 from "../Components/create/Create1";
import Sample from "../Components/create/Sample";
import ArtistCarousel from "../Components/create/ArtistCarousel";
import Craft from "../Components/create/Craft";
import TeamTrust from "../Components/Subscription/TeamTrust";
import Advertise from "../Components/blog/Advertise";
import Ways from "../Components/create/Ways";
import TestimonialCarousel from "../Components/create/TestimonialCarousel";

function Create() {
  return (
    <div>
      <Sample />
      <Create1 />
      <ArtistCarousel />
      <Craft />
      <TeamTrust />
      <Ways />
      <TestimonialCarousel />
      <Advertise />
    </div>
  );
}

export default Create;
