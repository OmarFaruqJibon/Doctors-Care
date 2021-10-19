import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DerviceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    // console.log(serviceId);

    const [service, setService] = useState([]);
    useEffect( () => {
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setService(data));
    },[]);

    const ExactItem = service.filter(td => td._id === serviceId);

    return (
        <div>
            <div className="service-container container">
                <div className="service-thumb">
                    <img src={ExactItem[0]?.thumb} alt="" />
                </div>
                <div className="ms-md-4">
                    <h3>Title: {ExactItem[0]?.title}</h3>
                    <p><small> Description: {ExactItem[0]?.description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;