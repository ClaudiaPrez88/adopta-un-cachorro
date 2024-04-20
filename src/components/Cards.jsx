import React from 'react';


import MyCard from './MyCard.jsx';

const Cards = (props) => {
  return (
   <>
        <MyCard 
        tit={props.tit} 
        titulo={props.titulo}  
        descripcion={props.descripcion} 
        link={props.link} 
        tag1={props.tag1}  
        tag2={props.tag2}
        color1={props.color1}
        color2={props.color2}
        />
  </>
     
  )
}

export default Cards