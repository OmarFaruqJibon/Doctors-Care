import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DerviceDetails = () => {
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
        <div className="d-flex justify-content-center align-items-center">
            <br />
            <div>
                <img src={ExactItem[0]?.thumb} alt="" />
                <h3>Brand: {ExactItem[0]?.title}</h3>
                <h4>Price: {ExactItem[0]?.price}</h4>
                <p>Description: {ExactItem[0]?.email}</p>
            </div>
        </div>
    );
};

export default DerviceDetails;