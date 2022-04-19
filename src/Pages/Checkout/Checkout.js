import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Checkout = () => {
   const [user] = useAuthState(auth);
   console.log(user);
   const notify = () => toast("Thank you for the booking.");
   const handelLoginSubmit = e => {
      e.preventDefault();
      notify();
   }
   return (
      <div className='container mb-5'>
         <div className="login-form">
            <h3 className='text-center mt-5 mb-3 fs-2 text-secondary fw-bold'>Checkout</h3>
            <div className='w-50 mx-auto  border border-secondary  p-5 rounded'>
               <Form onSubmit={handelLoginSubmit} >
                  <Form.Group className="mb-3" controlId="formBasicName">
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="text" placeholder="Name" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder={user.email} required disabled />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicAddress">
                     <Form.Label>Address</Form.Label>
                     <Form.Control type="text" placeholder="Address" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicAddress">
                     <Form.Label>Phone Number</Form.Label>
                     <Form.Control type="text" placeholder="Phone Number" required />
                  </Form.Group>
                  <Button className='mb-3 mt-5 w-25 d-block mx-auto' variant="primary" type="submit">
                     Submit
                  </Button>
               </Form>
            </div>
         </div>
         <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </div>
   );
};

export default Checkout;