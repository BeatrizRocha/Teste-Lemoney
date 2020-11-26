import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css';
// import { MouseOutlinedIcon } from '@material-ui/icons';

function HeroSection() {
    return (
        <div className='hero-background'>
            <div className="hero-container">
                <h1>We move the <mark className='orange'>cashback</mark> <br></br>industry forward</h1>
                <p>LemoneyWay acts as an online solution to help enhance the shopping experience.</p>
                <div className='hero-btns'>
                    {/* <MouseOutlinedIcon/> */}
                    {/* <KeyboardArrowDownOutlinedIcon/> */}
                    <p>Scroll Down</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
