import React from 'react';
import work1 from '../../../images/work1.jpg'
import work2 from '../../../images/work2.jpg'
import work3 from '../../../images/work3.jpg'
import work4 from '../../../images/work4.jpg'
import work5 from '../../../images/work5.jpg'
import work6 from '../../../images/work6.jpg'
import work7 from '../../../images/work7.jpg'
import work8 from '../../../images/work8.jpg'
import work10 from '../../../images/work10.jpg'
import work11 from '../../../images/work11.jpg'
import work12 from '../../../images/work12.jpg'
import work13 from '../../../images/work13.jpg'

const JobSimple = () => {
   return (
      <div className="container mb-5">
         <h2 className='text-center fs-2 m-5 fw-bold text-secondary'>Some Works</h2>
         <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work1} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work2} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work3} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work4} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work5} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work6} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work7} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work8} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work10} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work11} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work12} alt="" />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
               <img className="img-fluid rounded shadow mb-2" src={work13} alt="" />
            </div>
         </div>
      </div>
   );
};

export default JobSimple;