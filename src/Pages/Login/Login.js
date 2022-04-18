
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import SocialLogin from './SocialLogin';
import "./LogReg.css"
const Login = () => {
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const resetEmailRef = useRef()
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [reset, setReset] = useState(false);
  const [user1, loading, error] = useAuthState(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loadingInLogin,
    errorInLogin,
  ] = useSignInWithEmailAndPassword(auth);
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = event => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    signInWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    if (user1) {
      navigate(from, { replace: true })
    }
  }, [user1])
  if (loading) {
    return <Spinner className='d-block mx-auto' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

  }

  
  const handlereset = () => {
    setReset(true)

  }
  
  // Toast is here 
  
  return (
    <div className=' responsiveWidth mx-auto mt-5 border p-4 rounded'>
      {
        !reset ? <>
          <h2 style={{ color: "#00004d", textAlign: "center" }}>Log in </h2>
          {/* Login Form is here */}
          <Form onSubmit={handleSubmit} >
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
            
            <p className='text-danger'>{errorInLogin?.message}</p>
            <Button type="submit" style={{ backgroundColor: "#00004d" }}>
              Login
            </Button>
          </Form>
          <p>New to genius car? <Link to="/register" className='text-decoration-none'>register</Link></p>
          <p>forget password? <Link
            to="/login"
            className='text-decoration-none '
            onClick={handlereset}
          >
            Reset password
          </Link></p>
        </> : <>
          {/* Reset password form is here */}
          <Form onSubmit={async (e) => {
            e.preventDefault()
            const email = resetEmailRef.current.value
            await sendPasswordResetEmail(email);
           
          }}>
            <Form.Group className="mb-3" controlId="formBasicEmail ">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={resetEmailRef} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll send a mail on your E-mail
              </Form.Text>
            </Form.Group>
            <button
              className='btn btn-outline-primary d-block mx-auto'

              type="submit"
            >send reset mail</button>
          </Form>

          <p>have passowrd ? <Link to="/login" onClick={() => setReset(false)}>login</Link> </p>
        </>
      }
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;