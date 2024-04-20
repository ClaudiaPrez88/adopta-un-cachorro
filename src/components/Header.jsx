import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carrusel from './Carrusel';

import React from 'react'

const Header = (props) => {
  return (
    <Container className='carrusel'  fluid>
      <Row>
      <Col md={{ span: 6, offset: 3 }}><Carrusel tit={props.tit}/></Col>
      </Row>
    </Container>
   
  )
}

export default Header