
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



const MyCard = (props) => {
  return (
    <>
    <Col lg={4} md={6} xs={12}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.link} />
        <Card.Body>
          <Card.Title>
              {props.tit}
          </Card.Title>
          <Card.Text> Edad: {props.descripcion}
          </Card.Text>
          <Button variant="primary">Adoptar</Button>
          <p className='tit-list'>Tags:</p>
          <ul className='lista'>
          {props.tags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
          </ul>
          
        </Card.Body>
      </Card>
    </Col>
    </>
   
  )
}

export default MyCard