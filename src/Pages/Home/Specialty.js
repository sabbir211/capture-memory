import React from 'react';
import { Card } from 'react-bootstrap';

const Specialty = ({specialty}) => {
    const {img,title,text}=specialty
    return (
        <div>
            <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
    </Card.Body>
   
  </Card>
        </div>
    );
};

export default Specialty;