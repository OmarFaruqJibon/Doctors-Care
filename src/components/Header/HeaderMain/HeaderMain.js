import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="HeaderMain-container">
            <div className="container">
                <div className="row g-2">

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="p-3 brand">
                            <h1>Dr.<span>Care</span> </h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mt-4">
                        <div className="p-3">
                        <i className="fas fa-map-marker-alt"></i> <span className="header-contact-info">34TH AVENUE New York</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mt-4">
                        <div className="p-3">
                        <i className="fas fa-paper-plane"></i> <span className="header-contact-info">dr.care@gmail.com</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mt-4">
                        <div className="p-3">
                        <i className="fas fa-phone-alt"></i> <span className="header-contact-info">+ 0800 2466 7921</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderMain;