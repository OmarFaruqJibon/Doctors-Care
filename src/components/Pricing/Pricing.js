import React from 'react';
import './Pricing.css';
const Pricing = () => {
    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="pricing-container">
                        <h5 className="priceing-title">BASIC</h5>
                        <h1 className="price">50.20$</h1>
                        <p className="priceing-items">Diagnostic Services</p>
                        <p className="priceing-items">Professional Consultation</p>
                        <p className="priceing-items">Tooth Implants</p>
                        <p className="priceing-items">Surgical Extractions</p>
                        <p className="priceing-items">Teeth Whitening</p>
                        <button className="priceing-btn">Get Offer</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                <div className="pricing-container">
                        <h5 className="priceing-title">STANDARD</h5>
                        <h1 className="price">100.20$</h1>
                        <p className="priceing-items">Diagnostic Services</p>
                        <p className="priceing-items">Professional Consultation</p>
                        <p className="priceing-items">Tooth Implants</p>
                        <p className="priceing-items">Surgical Extractions</p>
                        <p className="priceing-items">Teeth Whitening</p>
                        <button className="priceing-btn">Get Offer</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="pricing-container">
                            <h5 className="priceing-title">PREMIUM</h5>
                            <h1 className="price">200.20$</h1>
                            <p className="priceing-items">Diagnostic Services</p>
                            <p className="priceing-items">Professional Consultation</p>
                            <p className="priceing-items">Tooth Implants</p>
                            <p className="priceing-items">Surgical Extractions</p>
                            <p className="priceing-items">Teeth Whitening</p>
                            <button className="priceing-btn">Get Offer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;