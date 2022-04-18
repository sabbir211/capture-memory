import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  
    const { text, img, title,price,id } = service
    const navigate=useNavigate()
    const handleCheckout=()=>{
    navigate(`/checkout/${id}`)
    }
    return (
        <div className='p-4'>
<Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
     
      <h5>Starting price:{price} $</h5>
    </Card.Body>
    
    <button onClick={handleCheckout} className='btn w-100' style={{ backgroundColor: "#00004d", color: "white" }}>Check out</button>
    
  </Card>
        </div>

    );
};

export default Service;