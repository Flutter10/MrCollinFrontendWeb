import React from 'react'
import Fans from '../Components/fan/Fans'
import Career from '../Components/fan/Career'
import Membership from '../Components/fan/Membership'
import TestimonialCarousel from '../Components/create/TestimonialCarousel'
import Advertise from '../Components/blog/Advertise'
import TeamTrust1 from '../Components/promote/TeamTrust1'

function Fan() {
  return (
    <div>
        <Fans/>
        <TeamTrust1/>
        <Career/>
        <Membership/>
        <TestimonialCarousel/>
        <Advertise/>
    </div>
  )
}

export default Fan