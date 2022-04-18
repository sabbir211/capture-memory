import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const Checkout = () => {
   const {serviceId}=useParams()
   const [services,setServices]=useState([])
   useEffect(()=>{
       fetch("serviceData.json")
       .then(res=>res.json())
       .then(data=>setServices(data))
   },[])
   console.log(services)
//    for (const service of services) {
//        console.log(service);
//    }
// const x=services.find(service=>service.id===serviceId)
// console.log(x);
    return (
        <div>

            <h2>i am from checkout{serviceId}</h2>
        </div>
    );
};

export default Checkout;