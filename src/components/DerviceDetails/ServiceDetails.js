import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DerviceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [service, setService] = useState([]);
    useEffect( () => {
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setService(data));
    },[]);

    const ExactItem = service.filter(td => td._id === serviceId);

    return (
        <div className="overflow-hidden m-3">
            <div className="service-container row gy-md-5">
                <div className="service-thumb col-md-5 col-12">
                    <img className="img-fluid" src={ExactItem[0]?.thumb} alt="" />
                </div>

                <div className="ms-md-4 mt-4 mt-md-0 col-md-5 col-12">
                    <h3>Title: {ExactItem[0]?.title}</h3>
                    <p><small> Description: {ExactItem[0]?.description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;