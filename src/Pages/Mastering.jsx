import React from 'react'
import Online from '../Components/mastering/Online'
import SignatureSound from '../Components/mastering/SignatureSound'
import TeamTrust from '../Components/Subscription/TeamTrust'
import TestimonialCarousel from '../Components/create/TestimonialCarousel'
import Frequently from '../Components/video/Frequently'
import Advertise from '../Components/blog/Advertise'
import Sound from '../Components/mastering/Sound'

function Mastering() {
  return (
    <div>
        <Online/>
        <SignatureSound/>
        <TeamTrust/>
        <Sound/>
        <TestimonialCarousel/>
        <Frequently/>
        <Advertise/>
    </div>
  )
}

export default Mastering