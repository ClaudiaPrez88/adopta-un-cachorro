
import './App.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header'
import Cards from './components/Cards'
import Menu from './components/Menu'
import Footer from './components/Footer'
import datos from '../public/data.js'

function App() {
  return (
    <>
    <Menu/>
      <Header tit="Adopta un perrito"/>
      <Container>
        <Row>
          {datos.map(dato => (
            <Cards 
            tit={dato.tit} 
            titulo={dato.titulo}  
            descripcion={dato.descripcion} 
            link={dato.link} 
            tag1={dato.tags[0]}  
            tag2={dato.tags[1]}
            color1="secondary"
            color2="success"
            />
          ))}
        </Row>
       </Container>
      
      <Footer/>
    </>
  )
}

export default App
