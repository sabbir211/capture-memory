import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import SocialLogin from './SocialLogin';
import "./LogReg.css"
const Registration = () => {
  const navigate = useNavigate()
  const [agree, setAgree] = useState(false)
  const [user, loading] = useAuthState(auth);
  const [createUserWithEmailAndPassword, a, b, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const nameRef = useRef("")
  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    createUserWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    if (user) {
      navigate("/home")
    }
  }, [user])

  // if (error) {
  //   console.log(error?.message);
  //   console.log("i am from error condition");
  // }
  console.log(error)
  return (
    <div className='responsiveWidth mx-auto mt-5 border p-4 rounded'>
      <h2 style={{ color: "#00004d", textAlign: "center" }}>Register</h2>
      <Form onSubmit={handleRegisterSubmit} >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name </Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter email" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail ">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={() => setAgree(!agree)} className={agree ? "" : "text-danger"} type="checkbox" label="Agree terms and condition" />
        </Form.Group>
        <p className='text-danger'>{error?.message}</p>
        <Button
          type="submit"
          style={{ backgroundColor: "#00004d" }}
          disabled={agree ? false : true}
        >
          Register
        </Button>
      </Form>
      <p>Already have account? <Link to="/login" className='text-decoration-none'>Login</Link></p>
      <SocialLogin></SocialLogin>
    </div>

  );
};

export default Registration;