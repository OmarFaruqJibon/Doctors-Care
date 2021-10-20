import React from 'react';
import './HomeTop.css';

const HomeTop = () => {
    return (
        <div className="container">
       <div className="row g-5">
        <div className="col-lg-4 col-md-6 col-12 d-flex info-wrap">
            <div className="info-icons">
                <i className="fas fa-shield-virus"></i>
            </div>
            <div className="info-body">
                <p className="info-title">Medical Privacy</p>
                <p><small>We guarantee the safety and sterility of medical equipment as well as the non-disclosure of information.</small></p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 d-flex info-wrap">
            <div className="info-icons">
                <i className="fas fa-user-md"></i>
            </div>
            <div className="info-body">
                <p className="info-title">Famous Doctors</p>
                <p><small>Doctors of our clinic have international certificates and are recognized all over the world. All staff are interned abroad.</small></p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 d-flex info-wrap">
            <div className="info-icons">
                <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="info-body">
                <p  className="info-title">Booking a Visit</p>
                <p><small>You can make an appointment for a doctor and also receive a reminder before the visit to the clinic.</small></p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 d-flex info-wrap">
            <div className="info-icons">
                <i className="far fa-gem"></i>
            </div>
            <div className="info-body">
                <p  className="info-title">Modern Equipment</p>
                <p><small>We use only the most modern medical equipment, skills for modern trends and innovations introducing into our practice.</small></p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 d-flex info-wrap">
            <div className="info-icons">
                <i className="fas fa-bolt"></i>
            </div>
            <div className="info-body">
                <p  className="info-title">New Approaches</p>
                <p><small>Modern medicine is developing very quickly and we can offer our clients the most up-to-date approaches and protocols.</small></p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 d-flex info-wrap">
            <div className="info-icons">
                <i className="fas fa-laptop-medical"></i>
            </div>
            <div className="info-body">
                <p  className="info-title">Health Monitoring</p>
                <p><small>We have developed special programs allowing our clients to periodically visit a doctor to monitor their health.</small></p>
            </div>
        </div>
     </div>     




            
        </div>
    );
};

export default HomeTop;