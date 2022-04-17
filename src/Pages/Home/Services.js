import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
   const [services,setServices]=useState([])
   useEffect(()=>{
       fetch("serviceData.json")
       .then(res=>res.json())
       .then(data=>setServices(data))
   },[])
   console.log(services);
    return (
        <div>
            <div className='text-center'>
                <h2>Services</h2>
            </div>
                 <CardGroup  className='row row-cols-1 row-cols-md-3 container mx-auto my-4'>
  
     {
             services.map(service=><Service key={service.id} service={service}></Service>)
         }
  </CardGroup>
      
        </div>
    );
};

export default Services;