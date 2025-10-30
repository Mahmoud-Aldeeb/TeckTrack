import React from 'react'
import Tracks from './AllTrack/Tracks'
import Reviews from '../reviews/Reviews'
import HeroSection from '../HeroSection/HeroSection'

const Home = () => {
    return (
        <div>
          <HeroSection/>
            <Tracks />
            <Reviews />
        </div>
    )
}

export default Home
