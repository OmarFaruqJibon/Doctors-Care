import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    const {user,handleSignOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link className="nav-item my-nav" to="/home">Home</Link>
                                <Link className="nav-item my-nav" to="/appoinment">Appoinment</Link>
                                <Link className="nav-item my-nav" to="/about">About</Link>
                                <Link className="nav-item my-nav" to="/pricing">Pricing</Link>
                                <Link className="nav-item my-nav" to="/blogs">Blogs</Link>
                                <Link className="nav-item my-nav" to="/contact">Contact</Link>
                        </div>

                        <span className="navbar-text">
                            {user.email ?
                                <><i className="fas fa-user-circle me-2"></i><span>{user.displayName} </span> <button onClick={handleSignOut} className="appointment-btn me-2">Sign Out</button>
                                </>:
                                <Link to="/signIn"><button className="appointment-btn">Sign In</button></Link>
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;