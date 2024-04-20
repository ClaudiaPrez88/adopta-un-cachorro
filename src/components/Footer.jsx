import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import links from '../../public/links';

function Footer() {
  return (
    <Container id='footer' fluid>
      <Row>
      <ul className='lista-footer'>
        {links.map(dato => (
            <li><a href={dato.link} target='_blank'>{dato.texto}</a></li> 
        ))}
        </ul>
        <Col className='copyright' xs={12}>Copyright © 2024, Pet care. All rights reserved.</Col>
      </Row>
    </Container>
  );
}

export default Footer;