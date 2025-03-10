import React from 'react'
import Connect from '../Components/peer/Connect'
import TeamTrust from '../Components/Subscription/TeamTrust'
import Peerphoto from '../Components/peer/Peerphoto'
import Seamlessly from '../Components/peer/Seamlessly'
import Frequently from '../Components/video/Frequently'
import Advertise from '../Components/blog/Advertise'

function Peer() {
  return (
    <div>
        <Connect/>
        <TeamTrust/>
        <Peerphoto/>
        <Seamlessly/>
        <Frequently/>
        <Advertise/>
    </div>
  )
}

export default Peer