import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);

    return (
        <div className="home-container">
            {/* Services section start */}
            <div className="service-section mb-5 mt-5">
                <h1 className="text-center fw-bolder container">Our Services</h1>
                <div className="row g-5 m-5 mt-0">
                    {
                       services.map((service=> 
                            <div key={service.key} className="col-lg-4 col-md-6 col-12 mt-5">
                            <div className="service">
                                <div className="thumb">
                                    <img src={service.thumb} alt="" />
                                </div>
                                <div className="service-detail">
                                    <p className="course-item-heading"><small>SERVICE</small></p>
                                    <h5 className="fw-bold">{service.title}</h5>
                                    <p><small>{service.description}</small></p>
                                    </div>
                                <div className="text-center">
                                    <Link to={`/service-details/${service._id}`}><button className="btn detail-btn">Learn More</button></Link>
                                </div>
                                    
                                </div>
                            </div>
                        
                        ))}
                </div>
            </div>

            {/* Consultants section start */}
            <div className="consultants-section">
                <div className="consultants-top-area">
                    <div className="text-center">
                        <h5>PROFESSIONAL TEAM</h5>
                        <h1>Our doctors will help you</h1>
                        <p><small>The optimum ratio of price and quality responsible <br /> and conscientious approach</small></p>
                    </div>
                </div>

                <div className="container">
                    <div className="consultants-header text-center mb-5">
                        <h1 className="fw-bolder">Our Consultants</h1>
                        <p> <small>We provide worlds best services from worlds top class doctors and nurses</small> </p>
                    </div>
                    <div className="consultants-body">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6 col-12">
                                <img src={'https://i.postimg.cc/0jPS5Q3v/doctor-1.jpg'} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <img src={'https://i.postimg.cc/c1PFdpNC/doctor-2.jpg'} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <img src={'https://i.postimg.cc/Mp2VLxJ0/doctor-3.jpg'} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <img src={'https://i.postimg.cc/LsVtfW7t/doctor-4.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Help section */}
            <div className="help-container p-md-5 p-3">
                <div>
                    <h1 className="text-center text-white mb-4 fw-bolder">Need Help?</h1>
                    <p className="text-center text-white">Get helpful information on what’s important to you when choosing your right nutritionist.</p>
                    <div className="help-input-field">
                        <input className="form-control" type="text" placeholder="Name *"/>
                        <input className="form-control"type="email"  placeholder="Email *"/>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;