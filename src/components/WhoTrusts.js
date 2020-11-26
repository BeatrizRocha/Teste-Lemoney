import React from 'react'
import { Button } from './Button'
import './WhoTrusts.css'
import '../App.css';
import Logos from '../media/images/logos.svg'

function WhoTrusts() {
    return (
        <div className='whoTrusts-background'>
            <div className="whoTrusts-container">
                <div className="whoTrusts-header">
                    <div className="whoTrusts-header-name">
                        <h1>Who trusts LemoneyWay</h1>
                    </div>
                    <div className="whoTrusts-header-options">
                        <h2>About</h2>
                        <h2><mark className='orange'>Who Trusts?</mark></h2>
                        <h2>Join us</h2>
                        <h2>Careers</h2>
                    </div>
                </div>
                <div className="whoTrusts-body">
                    <div className="whoTrusts-body-logos">
                        <img src={Logos} alt="logos"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoTrusts
