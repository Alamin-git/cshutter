import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import gLogo from '../../images/google-icon.png';
import gitLogo from '../../images/githubLogo.png';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
   const emailRef = useRef('');
   const passwordRef = useRef('');
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   let errorMassage;
   let loadingMassage;
   const [
      signInWithEmailAndPassword, user, loading, error
   ] = useSignInWithEmailAndPassword(auth);

   const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
   const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

   if (user || user1 || user2) {
      navigate(from, { replace: true });
   }
   if (loading || loading1 || loading2) {
      loadingMassage = <p>Loading...</p>
   }
   if (error || error1 || error2) {
      errorMassage = <p className='text-danger'>Error: {error?.message.slice(17, -2)} {error1?.message.slice(17, -2)} {error2?.message.slice(17, -2)}</p>
   }
   const notify = () => toast("Logging in...");
   const handelLoginSubmit = e => {
      e.preventDefault();
      notify();
      signInWithEmailAndPassword(email, password);
   }
   return (
      <div className='container mb-5'>
         <div className="login-form">
            <h3 className='text-center mt-5 mb-3 fs-2 text-secondary fw-bold'>Login</h3>
            <div className='w-50 mx-auto  border border-secondary  p-5 rounded'>
               <Form onSubmit={handelLoginSubmit} >
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
                        <p>Don't have account?
                           <Link
                              to={'/signout'}
                              className="text-decoration-none">
                              Sign Up
                           </Link></p>
                     </Form.Text>
                  </Form.Group>
                  <Button className='mb-3 d-block mx-auto' variant="primary" type="submit">
                     Login
                  </Button>
               </Form>
               <p className='login-or'>or</p>
               <div className="g-sign-btn">
                  <img onClick={() => signInWithGoogle()} src={gLogo} alt="" />
                  <img onClick={() => signInWithGithub()} src={gitLogo} alt="" />
               </div>
            </div>
         </div>
         <ToastContainer />
      </div>

   );
};

export default Login;