import React from "react";
import TeamTrust from "../Components/Subscription/TeamTrust";
import Faq from "../Components/Subscription/Faq";
import Plan from "../Components/Subscription/Plan";
import Studio from "../Components/Subscription/Studio";
import Content from "../Components/Subscription/Content2";

export default function Subscriptions() {
  return (
    <div>
      <Plan />
      <Studio/>
      <TeamTrust />
      <Content/>
      <Faq />
    </div>
  );
}