import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container id='footer' fluid>
      <Row>
        <Col className='texto-footer' xs={12}><p>En nuestra fundación, nos dedicamos apasionadamente a rescatar perros en situaciones difíciles y brindarles una segunda oportunidad. Cada día, nos esforzamos por ofrecerles una vida mejor, llena de amor y cuidado.</p></Col>
        <Col className='copyright' xs={12}>Copyright © 2024, Pet care. All rights reserved.</Col>
      </Row>
    </Container>
  );
}

export default Footer;