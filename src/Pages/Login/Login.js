import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
   const emailRef = useRef('');
   const passwordRef = useRef('');

   const handelSubmit = e => {
      e.preventDefault();
      console.log(emailRef.current.value, passwordRef.current.value);
   }
   return (
      <div className='container'>
         <div className="login-form">
            <h3 className='text-center mt-5 mb-3 fs-2 text-secondary fw-bold'>Login</h3>
            <Form onSubmit={handelSubmit} className='w-50 mx-auto  border p-5 rounded'>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={passwordRef} type="password" placeholder="Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Text>
                     Don't have account? <Link to={''} className="text-decoration-none">Sign Up</Link>
                  </Form.Text>
               </Form.Group>
               <Button variant="primary" type="submit">
                  Login
               </Button>
            </Form>
         </div>
      </div>
   );
};

export default Login;