import React from 'react';
import Banner from '../Banner/Banner';
import JobSimple from '../JobSimple/JobSimple';
import Services from '../Services/Services';

const Home = () => {
   return (
      <>
         <Banner></Banner>
         <Services></Services>
         <JobSimple />
      </>
   );
};

export default Home;