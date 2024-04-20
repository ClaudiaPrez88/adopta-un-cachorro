import Carousel from 'react-bootstrap/Carousel';

function Carrusel(props) {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./perrito.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{props.tit}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;