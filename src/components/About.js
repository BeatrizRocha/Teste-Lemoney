import React from 'react'
import { Button } from './Button'
import './About.css'
import '../App.css';

function About() {
    return (
        <div className='about-background'>
            <div className="about-container">
                <div className="about-header">
                    <div className="about-header-name">
                        <h1>About</h1>
                    </div>
                    <div className="about-header-options">
                        <h2><mark className='orange'>About</mark></h2>
                        <h2>Who Trusts?</h2>
                        <h2>Join us</h2>
                        <h2>Careers</h2>
                    </div>
                </div>
                <div className="about-body">
                    <div className="about-body-paragraph">
                        <p>
                            Through solid partnerships and affiliates, we provide a digital platform that is prepared to connect people to their favorite stores. In order to do this we helped raise the industry by offering our customers a monetary compensation, the cash back. By doing so we are ensuring that every simple act of shopping can be rewarded.<br/><br/>
                            Shopping experiences will never be the same after you start making purchases with cash back. <br/> <br/>
                            Offering the highest cash back rates for your customers is our top priority! <br/><br/>
                            Customer satisfaction is the reason why we aim for greatness and always work hard to push forward for even better results.
                        </p>
                    </div>
                </div>
                <div className="about-body-columns">
                    <div className="about-body-column">
                        <div className="about-column-title">
                            <p>US Operation</p>
                        </div>
                        <div className="about-column-text">
                            <p>
                                Lemoney US is a B2C website developed to assure our customers that they can have the highest possible cash back whenever it’s possible. Our website lemoney.com is filled with amazing stores and offers so you won’t miss the best opportunities to save big. Besides, we have been on the market since 2016 and our goal is to offer ways for our customers to save money while they shop online. But that’s not all! We also aim for customer satisfaction and our Trust Pilot score perfectly reflects that.
                            </p>
                        </div>
                    </div>
                    <div className="about-body-column">
                        <div className="about-column-title">
                            <p>Brazil Operation</p>
                        </div>
                        <div className="about-column-text">
                            <p>
                                With the knowledge and experience from working in one of the most competitive cashback markets in the world we decided to expand our operations to Brazil. We did that by working alongside big brands and associations to create our cashback and expertise platform. That said, Lemoney BR designed a B2B2C online platform to help our partners promote cashback to their customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
