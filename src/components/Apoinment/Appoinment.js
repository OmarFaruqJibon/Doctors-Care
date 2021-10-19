import React from 'react';
import './Appoinment.css';
const Appoinment = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h2 className="text-warning">Book An Appoinment</h2>
                    <h5>Fill up carefully</h5>
                </div>
                
                <div className="col-md-9 mx-auto ">
                    <form action="">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control bg-light text-white" placeholder="Email Address " />
                        </div>
                        <div className="form-group mb-3">
                            <div className="input-part">
                                <input type="text" className="form-control bg-light text-white" placeholder="Phone " />
                                <input type="text" className="ms-3 form-control bg-light text-white" placeholder="Address " />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="input-part">
                                <input type="text" className="form-control bg-light text-white" placeholder="Date of Birth " />
                                <input type="text" className="ms-3 form-control bg-light text-white" placeholder="Appoinment Date " />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <textarea name="" className="form-control bg-light text-white" id="" cols="28" rows="11" placeholder="Discribe your problems... "></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-lg btn-warning"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;