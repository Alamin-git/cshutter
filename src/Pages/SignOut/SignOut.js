import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignOut = () => {
   const emailRef = useRef('');
   const passwordRef = useRef('');
   const [error, setError] = useState('');
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const [
      createUserWithEmailAndPassword,
      user,
      loading
   ] = useCreateUserWithEmailAndPassword(auth);

   if (user) {
      navigate(from, { replace: true });
   }

   const handelSignUpSubmit = e => {
      e.preventDefault();
      // if (password.length < 6) {
      //    setError('Password must be 6 character or more.');
      //    return;
      // }
      setError('');
      createUserWithEmailAndPassword(email, password);
   }
   return (
      <div className='container mb-5'>
         <div className="login-form">
            <h3 className='text-center mt-5 mb-3 fs-2 text-secondary fw-bold'>Sign Up</h3>
            <Form onSubmit={handelSignUpSubmit} className='w-50 mx-auto  border p-5 rounded'>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control ref={emailRef} type="text" placeholder="Name" required />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
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
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Text>
                     <p style={{ color: 'red' }}>{error}</p>
                     {
                        loading && <p>Loading...</p>
                     }
                     <p>Already have an account?
                        <Link
                           to={'/login'}
                           className="text-decoration-none ml-2">
                           Login
                        </Link></p>
                  </Form.Text>
               </Form.Group>
               <Button variant="primary" type="submit">
                  Sign Up
               </Button>
            </Form>
         </div>
      </div>
   );
};

export default SignOut;