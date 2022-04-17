import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { text, img, title,price } = service
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
    <button className='btn' style={{ backgroundColor: "#00004d", color: "white" }}>See details</button>
  </Card>
            {/* <div className='col border p-4'>
                <img className='w-100' src={img} alt="" />
                <div className="text-center mt-2">
                     <h2>{title}</h2>
                <p><small>{text}</small></p>
                     <h5>Starting price:{price} $</h5>
                <button className='btn' style={{ backgroundColor: "#00004d", color: "white" }}>See details</button>
                </div>
               
            </div> */}
        </div>

    );
};

export default Service;