import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Login/LogReg.css"


const CheckoutForm = () => {
    const [success,setSuccess]=useState(false)
    const navigate=useNavigate()
const handleCheckout=(e)=>{
e.preventDefault()
setSuccess(true)
}
    return (
        <div className='  mx-auto mt-5 border p-4 rounded'>
            {
                success ? <div>
                <h1>successfully booked</h1>
                <p>we will reach you soon</p>
                <Link to="/" className="btn btn-outline-primary">Go to home</Link>
            </div> 
           :
            <Form onSubmit={handleCheckout}>
                <Form.Group className="mb-3" controlId="formBasicName ">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" required />                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress ">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="address" required />
                    <Form.Text className="text-muted">
                        nation/district
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail ">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll send a mail on your E-mail
                    </Form.Text>
                </Form.Group>
                <button
                    className='btn btn-outline-primary d-block mx-auto'

                    type="submit"
                >Proceed checkout</button>
            </Form> }
        </div>
    );
}
export default CheckoutForm;