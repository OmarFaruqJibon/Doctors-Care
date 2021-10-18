import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">

                <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item my-nav">
                                <a className="nav-link" aria-current="page" href="www.sdd.com">Home</a>
                            </li>
                            <li className="nav-item my-nav">
                                <a className="nav-link"  href="www.sdd.com">About</a>
                            </li>
                            <li className="nav-item my-nav ">
                                <a className="nav-link"  href="www.sdd.com">Doctors</a>
                            </li>
                            <li className="nav-item my-nav">
                                <a className="nav-link"  href="www.sdd.com">Pricing</a>
                            </li>
                            <li className="nav-item my-nav">
                                <a className="nav-link"  href="www.sdd.com">Blogs</a>
                            </li>
                            <li className="nav-item my-nav">
                                <a className="nav-link"  href="www.sdd.com">Contact</a>
                            </li>
                        </ul>

                        <span className="navbar-text">
                            <button className="appointment-btn">Make an Appoinment</button>

                        </span>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;