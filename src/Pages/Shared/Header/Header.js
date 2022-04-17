import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
   const [user] = useAuthState(auth);
   return (
      <div className='sticky-top shadow'>
         <Navbar bg="light" expand="lg">
            <Container>
               <Navbar.Brand
                  as={Link}
                  className='brand-name'
                  to="/">
                  <small>c</small>Shutter
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto fs-4 ">
                     <Nav.Link
                        as={CustomLink}
                        className='header-menu'
                        to="/home">
                        Home
                     </Nav.Link>
                     <Nav.Link
                        as={CustomLink}
                        className='header-menu'
                        to={'/checkout'}>
                        Checkout
                     </Nav.Link>
                     <Nav.Link
                        as={CustomLink}
                        className='header-menu'
                        to={'/blog'}>
                        Blogs
                     </Nav.Link>
                     <Nav.Link
                        as={CustomLink}
                        className='header-menu'
                        to={'/about'}>
                        AboutMe
                     </Nav.Link>
                  </Nav>
                  <Nav>
                     {
                        user ?
                           <Nav.Link
                              as={CustomLink}
                              onClick={() => { signOut(auth) }}
                              className='header-menu fs-4'
                              to={'/login'}>
                              Logout
                           </Nav.Link>
                           :
                           <Nav.Link
                              as={CustomLink}
                              className='header-menu fs-4'
                              to={'/login'}>
                              Login
                           </Nav.Link>}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;