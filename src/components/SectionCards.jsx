import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import datos from '../../public/data.js';

import MyCard from './MyCard';

const SectionCards = () => {
  return (
    <Container>
      <Row>
      {datos.map(dato => (
        <MyCard tit={dato.tit} titulo={dato.titulo}  descripcion={dato.descripcion} link={dato.link} tags={dato.tags}/>
      ))}
      </Row>
    </Container>
  )
}

export default SectionCards