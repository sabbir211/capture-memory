import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import "../Login/LogReg.css"
import CheckoutForm from './CheckoutForm';
const Checkout = () => {
   const {serviceId}=useParams()
   const [services,setServices]=useState([])
   useEffect(()=>{
       fetch("/serviceData.json")
       .then(res=>res.json())
       .then(data=>setServices(data))
   },[])
   
//    for (const service of services) {
     
// }
const getSelectedService=services.find(service=>service.id==serviceId)
console.log(getSelectedService);

return (
        <div className="d-block mx-auto border responsiveWidth text-center">
          <img src={getSelectedService?.img} alt="" width="200px" />
            <h2>{getSelectedService?.title}</h2>
            <h3>Price:$ {getSelectedService?.price}/Day</h3>
            <CheckoutForm></CheckoutForm>
        </div>
    );
};

export default Checkout;