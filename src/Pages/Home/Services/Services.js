import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
   const [services] = useServices();
   return (
      <Container>
         <h2 className='text-center fs-2 m-5 fw-bold text-secondary'>Services</h2>
         <Row className='mb-5'>
            {services.map(service => (<Service
               key={services._id}
               service={service}
            ></Service>
            ))}
         </Row>
      </Container>

   );
};

export default Services;