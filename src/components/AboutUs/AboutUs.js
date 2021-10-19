import React from 'react';
import './AboutUs.css';
import image from '../../images/about1.png';

const AboutUs = () => {
    return (
        <div className="about-container container">
            <div className="row container">
            <div className="col-md-6 col-12">
                <div className="about-img img-fluid">
                    <img className="about-img img-fluid" src={image} alt="" />
                </div>
            </div>
            <div className="col-md-6 col-12 ">
                <p className="mt-5">About Dr.Care</p>
                <div className="mt-5">
                    
                    <h2>Medical specialty concerned with the care <br /> of acutely ill hospitalized patients</h2>
                    <p className="mt-3"><small>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</small></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;