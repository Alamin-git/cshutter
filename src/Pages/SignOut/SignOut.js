import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import gLogo from '../../images/google-icon.png';
import gitLogo from '../../images/githubLogo.png';

const SignOut = () => {
   const emailRef = useRef('');
   const passwordRef = useRef('');
   const [error, setError] = useState('');
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   let errorMassage;
   let loadingMassage;

   const [
      createUserWithEmailAndPassword,
      user,
      loading
   ] = useCreateUserWithEmailAndPassword(auth);

   const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
   const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

   if (user || user1 || user2) {
      navigate(from, { replace: true });
   }
   if (loading || loading1 || loading2) {
      loadingMassage = <p>Loading...</p>
   }
   if (error || error1 || error2) {
      errorMassage = <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
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
            <div className='w-50 mx-auto  border border-secondary p-5 rounded'>
               <Form onSubmit={handelSignUpSubmit}>
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
                        <p>{loadingMassage}</p>
                        <p>{errorMassage}</p>
                        <p>Already have an account?
                           <Link
                              to={'/login'}
                              className="text-decoration-none ml-2">
                              Login
                           </Link></p>
                     </Form.Text>
                  </Form.Group>
                  <Button className='mb-3 d-block mx-auto' variant="primary" type="submit">
                     Sign Up
                  </Button>
               </Form>
               <p className='login-or'>or</p>
               <div className="g-sign-btn">
                  <img onClick={() => signInWithGoogle()} src={gLogo} alt="" />
                  <img onClick={() => signInWithGithub()} src={gitLogo} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignOut;