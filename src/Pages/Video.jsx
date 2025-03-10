import React from 'react'
import Vision from '../Components/video/Vision'
import Bringvideo from '../Components/video/Bringvideo'
import Substitle from '../Components/video/Substitle'
import TeamTrust from '../Components/Subscription/TeamTrust'
import Transform from '../Components/video/Transform'
import TestimonialCarousel from '../Components/create/TestimonialCarousel'
import Advertise from '../Components/blog/Advertise'
import Frequently from '../Components/video/Frequently'

function Video() {
  return (
    <div>
        <Vision/>
        <Bringvideo/>
        <Substitle/>
        <TeamTrust/>
        <Transform/>
        <TestimonialCarousel/>
        <Frequently/>
        <Advertise/>
    </div>
  )
}

export default Video