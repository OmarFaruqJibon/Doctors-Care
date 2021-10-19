import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-area">
            <div className="banner-text">
                <p><small>DON’T LOOK FURTHER, THIS IS YOUR DOCTOR</small></p>
                <h1>We Care <span>About Your Health</span></h1>
                <p> <small>Your Health is Our Top Priority with Comprehensive, Affordable medical. We Provide Free Health Care Consultation <br /> We only provide good treatment with a good environment</small></p>
                <button className="banner-btn">Learn More</button>
            </div>

            </div>
        </div>
    );
};

export default Banner;