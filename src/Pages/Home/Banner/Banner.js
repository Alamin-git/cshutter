import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
   return (
      <div className='banner d-flex align-items-center'>
         <div className="container banner-text">
            <h1 className='title fw-bold'><span className='text-white'>Hello,</span> <br />I'm Michael Josh.</h1>
            <h4 className='title2 mt-5 mb-5 text-uppercase'>Photographer, Traveler</h4>
            <Link className='fs-3 btn btn-info fw-bold' to={'/about'}>About Me</Link>
         </div>
      </div>
   );
};

export default Banner;