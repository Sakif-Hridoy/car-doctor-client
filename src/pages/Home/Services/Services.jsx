import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';

const Services = props => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2>Our services</h2>
            <h1>Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            <div>
                <p>services{services.length}</p>
                <div className='grid grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
                </div>
            </div>
        </div>
    );
};

Services.propTypes = {
    
};

export default Services;