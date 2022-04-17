import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
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
                        // as={CustomLink}
                        className='header-menu'>
                        Services
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
                        About Me
                     </Nav.Link>
                  </Nav>
                  <Nav>
                     <Nav.Link
                        as={CustomLink}
                        className='header-menu fs-4'
                        to={'/login'}>
                        Login
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;