import React from 'react';
import './Footer.css'

const Footer = () => {
   return (
      <div className='fixed-bottom footer'>
         <p className=' footer-text'>&copy;
            <span id="copyright">
               {(new Date().getFullYear())}
            </span> Copyright: <span className='footer-logo'>cShutter</span></p>
      </div>
   );
};

export default Footer;