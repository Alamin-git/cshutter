import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { ArrowRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
   const { picture, name, body, price } = service;
   return (
      <Col>
         <Card className='mb-5 shadow-lg' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text className='text-muted'>
                  {body.slice(0, 75)}...
               </Card.Text>
               <Card.Text className='fw-bold font-monospace'>Price: ${price}</Card.Text>
               <Button as={Link} to={'/checkout'} variant="fs-3 btn btn-info fw-bold text-secondary">Book Now
                  <ArrowRightIcon style={{ width: '20px' }} />
               </Button>
            </Card.Body>
         </Card>
      </Col>
   );
};

export default Service;