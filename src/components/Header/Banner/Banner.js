import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>We Care <br /> <span>About Your Health</span></h1>
                <p>YOUR HEALTH IS OUR FIRST PRIORITY WITH COMPREHENSIVE AND AFFORDABLE MEDICLE</p>
                <button className="banner-btn">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;