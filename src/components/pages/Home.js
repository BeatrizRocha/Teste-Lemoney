import '../../App.css'
import React from 'react'
import HeroSection from '../HeroSection'
import About from '../About'
import WhoTrusts from '../WhoTrusts'
import JoinUs from '../JoinUs'
import Careers from '../Careers'

function Home() {
    return (
        <>
            <HeroSection /> {/* Capa */}
            <About /> {/* About */}
            <WhoTrusts /> {/* Who Trusts? */}
            <JoinUs /> {/* Join us */}
            <Careers /> {/* Careers */}
        </>
    )
}

export default Home