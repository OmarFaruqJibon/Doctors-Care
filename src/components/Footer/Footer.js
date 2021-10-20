import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="footer-logo">
                        <h1 className="f-logo fw-bolder">Dr.<span>Care</span> </h1>
                    </div>
                    <div className="social-icons">
                        <a target="blank" href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a target="blank" href="https://www.twitter.com/"><i className="fab fa-twitter-square"></i></a>
                        <a target="blank" href="https://www.github.com/"><i className="fab fa-github"></i></a>
                        <a target="blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <h5 className="footer-menu">NAVIGATE</h5>
                    <div className="footer-nav">
                        <Link className="footer-nav-item" to="/home">Home</Link>
                        <Link className="footer-nav-item" to="/appoinment">Appoinment</Link>
                        <Link className="footer-nav-item" to="/pricing">Pricing</Link>
                        <Link className="footer-nav-item" to="/blogs">Blogs</Link>
                        <Link className="footer-nav-item" to="/about">About</Link>
                         <Link className="footer-nav-item" to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <h5 className="footer-menu">SUBSCRIBE</h5>
                    <div className="footer-input">
                    <input type="email" placeholder="Enter Email" />
                    <button>Submit</button>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p className="footer-bottom">Copyright ©2021 All rights reserved | Dr.Care</p>
            </div>
        </div>
    );
};

export default Footer;