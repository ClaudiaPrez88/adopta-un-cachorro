import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
  return (
    <div>
        <ul className='lista'>
        <li><Badge bg={props.color1}>#{props.tag1}</Badge></li>
        <li><Badge bg={props.color2}>#{props.tag2}</Badge></li>
        </ul>
    </div>
  )
}

export default Tags