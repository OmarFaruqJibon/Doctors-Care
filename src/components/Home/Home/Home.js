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
    // console.log(service);
    // slice courses array to 4 elements
    const fourCourses = services.slice(0, 6);

    return (
        <div className="home-container">
            {/* Services section start */}
            <div className="service-section mb-5 mt-5">
                <h1 className="coutses-title container">Our Services</h1>
                <div className="row g-5 m-5 mt-0">
                    {
                        fourCourses.map((course=> 
                            <div key={course.key} className="col-lg-4 col-md-6 col-12 mt-5">
                            <div className="cart">
                                <div className="thumb">
                                    <img src={course.thumb} alt="" />
                                </div>
                                <div className="cart-detail">
                                    <p className="course-item-heading"><small>COURSE</small></p>
                                    <h5>{course.title}</h5>
                                    <p><small>By : {course.doctorName}</small></p>
                                    <p><small>Rating : {course.rating}<i className="rating fas fa-star"></i></small></p>
                                    <div className="d-flex justify-content-between">
                                        <p><small>Duration : {course.courseDuration}</small></p>
                                        <p className="price"><small>$ {course.price}</small></p>
                                    </div>
                                <div className="text-center">
                                    <Link to={`/service-details/${course._id}`}><button className="btn detail-btn">Learn More</button></Link>
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>

            {/* Consultants section start */}
            <div className="consultants-section m-5">
                <div className="consultants-header text-center">
                    <h2>Our Consultants</h2>
                    <p> <small>We provide worlds best services from worlds top class doctors and nurses</small> </p>
                </div>
                <div className="consultants-body">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src={'https://i.postimg.cc/0jPS5Q3v/doctor-1.jpg'} alt="" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src={'https://i.postimg.cc/c1PFdpNC/doctor-2.jpg'} alt="" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src={'https://i.postimg.cc/Mp2VLxJ0/doctor-3.jpg'} alt="" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src={'https://i.postimg.cc/LsVtfW7t/doctor-4.jpg'} alt="" />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;