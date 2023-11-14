import React from 'react'

import Card from 'react-bootstrap/Card';
import "./mycard.scss";
import students from "./Students.json"
import { Container, Row } from 'react-bootstrap';

const MyCard = () => {
  return (

    <Container>
      <Row className='g-4'>
       {students.map((item)=>(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.isim}</Card.Title>
        <Card.Title>{item.yas}
        </Card.Title>
        <a href='https://www.youtube.com/' className='btn btn-secondary'>Go somewhere</a>
      </Card.Body>
    </Card>
       ))}
       </Row>
    </Container>
  );
};

export default MyCard;
