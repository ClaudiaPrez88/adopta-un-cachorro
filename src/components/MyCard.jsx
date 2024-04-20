
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Tags from './Tags';



const MyCard = (props) => {
  return (
    <>
    <Col lg={4} md={6} xs={12} className='card-perro'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.link} />
        <Card.Body>
          <Card.Title>
              {props.tit}
          </Card.Title>
          <Card.Text> Edad: {props.descripcion}
          </Card.Text>
          <Button variant="primary">Adoptar</Button>
          <p className='tit-list'>Etiquetas:</p>
          <Tags tag1={props.tag1} tag2={props.tag2} color1={props.color1} color2={props.color2}/>
        </Card.Body>
      </Card>
    </Col>
    </>
   
  )
}

export default MyCard