import React from 'react'
import Create from '../Components/music/Create'
import TeamTrust from '../Components/Subscription/TeamTrust'
import Distribution from '../Components/music/Distribution'
import Comes from '../Components/music/Comes'
import Frequently from '../Components/video/Frequently'
import TestimonialCarousel from '../Components/create/TestimonialCarousel'
import Advertise from '../Components/blog/Advertise'

function MusicDistribute() {
  return (
    <div>
        <Create/>
        <TeamTrust/>
        <Distribution/>
        <Comes/>
        <Frequently/>
        <TestimonialCarousel/>
        <Advertise/>
    </div>
  )
}

export default MusicDistribute