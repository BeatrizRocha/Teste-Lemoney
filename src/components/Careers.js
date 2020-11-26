import React from 'react'
import { Button } from './Button'
import './Careers.css'
import '../App.css';

function WhoTrusts() {
    return (
        <div className='careers-background'>
            <div className="careers-container">
                <div className="careers-header">
                    <div className="careers-header-name">
                        <h1>Work with us</h1>
                    </div>
                    <div className="careers-header-options">
                        <h2>About</h2>
                        <h2>Who Trusts?</h2>
                        <h2>Join us</h2>
                        <h2><mark className='orange'>Careers</mark></h2>
                    </div>
                </div>
                <div className="careers-body">
                    <div className="careers-body-text">
                        <p>Contact us to learn how you can become a partner and start providing the best cash back rates to your customers.</p>
                    </div>
                    <div className="careers-body-contact">
                        <div className="body-contact-inputs">
                            <input type="text" placeholder='Name'/>
                            <input type="text" placeholder='Email'/>
                            <input type="text" placeholder='Message'/>
                            <div className="body-contact-btn">
                                <button>Let's talk!</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="careers-footer">
                    © 2020, LemoneyWay.
                </div>
            </div>
        </div>
    )
}

export default WhoTrusts
