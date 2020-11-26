import React from 'react'
import './Cover.css'
import '../App.css';

function Cover() {
    return (
        <div className='cover-background'>
            <div className="cover-container">
                <h1>We move the <mark className='orange'>cashback</mark> <br></br>industry forward</h1>
                <p>LemoneyWay acts as an online solution to help enhance the shopping experience.</p>
                <div className='cover-btns'>
                    <i class="fas fa-mouse"></i>
                    <i class="fas fa-chevron-down"></i>
                    <p>Scroll Down</p>
                </div>
            </div>
        </div>
    )
}

export default Cover
