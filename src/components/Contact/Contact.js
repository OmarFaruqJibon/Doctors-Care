import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="overflow-hidden">
            <div className="contact-container row  my-5 py-5">
                <div className="col-md-6">
                <div className="apoinment">
            <div className="container">
                <div className="text-center text-white mb-5">
                    <h2 className="text-warning">Contact Us</h2>
                </div>
                <div className="col-md-9 mx-auto ">
                    <form action="">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control bg-light text-white" placeholder="Name" />
                        </div>
                        <div className="form-group mb-3">
                            <div className="input-part">
                                <input type="text" className="form-control bg-light text-white" placeholder="Phone " />
                                <input type="text" className="ms-3 form-control bg-light text-white" placeholder="Address " />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <textarea name="" className="form-control bg-light text-white" id="" cols="28" rows="8" placeholder="Tell about yourself... "></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-lg btn-warning"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                </div>

                <div className="col-md-6">
                    
                    <div  className="contact-info mt-4 mt-md-0">
                        <h2 className="text-warning mb-lg-5">Our Contact Information</h2>
                        <p className="text-light mt-lg-5">Email Address: info@dr.care.com</p>
                        <p className="text-light">Phone: + 1235 2355 98</p>
                        <p className="text-light">Website: Dr.Care.com</p>
                        <p className="text-light">Address:  198 West 21th Street, <br /> Suite 721 New York NY 10016</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;