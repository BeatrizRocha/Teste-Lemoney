import React from 'react'
import './JoinUs.css'
import '../App.css';

function WhoTrusts() {
    return (
        <div className='joinUs-background' >
            <div className="joinUs-container" >
                <div className="joinUs-header" >
                    <div className="joinUs-header-name" >
                        <h1>Let’s work together!</h1>
                    </div>
                    <div className="joinUs-header-options" >
                        <h2>About</h2>
                        <h2>Who Trusts?</h2>
                        <h2><mark className='orange'>Join us</mark></h2>
                        <h2>Careers</h2>
                    </div>
                </div>
                <div className="joinUs-body-text" >
                    <p>Contact us to learn how you can become a partner and start providing the best cash back rates to your customers. </p>
                </div>
                <div className="joinUs-body-email" >
                    <p>contact@lemoneyway.com</p>
                </div>
            </div>
        </div>
    )
}

export default WhoTrusts
