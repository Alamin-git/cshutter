import React from 'react';
import './AboutMe.module.css'
import selfPhoto from '../../images/self-image.jpg'

const AboutMe = () => {
   return (
      <div className="container mt-5 mb-5">
         <div className="row justify-content-center">
            <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
               <div className="card border-0 shadow">
                  <img src={selfPhoto} alt="..." />
                  <div className="card-body p-1-9 p-xl-5">
                     <div className="mb-4">
                        <h3 className="h4 mb-0">Md. Alamin Sheikh</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-8">
               <div className="ps-lg-1-6 ps-xl-5">
                  <div className="mb-5 wow fadeIn">
                     <div className="text-start mb-1-6 wow fadeIn">
                        <h2 className="h1 mb-0 text-primary mt-5">#About Me</h2>
                     </div>
                     <p>
                        Hello! I'm Alamin. I'm learning web development. I wanted to do web development. React is very interesting thinks. Now I want to be React frontend developer.I want to do a job or freelancing with it.Jobs are my first choice. Now this is my main goal. Inshallah I will achieve it soon.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutMe;