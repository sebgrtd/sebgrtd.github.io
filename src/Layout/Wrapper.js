import React from 'react'
import './Wrapper.css'
import { Container } from 'react-bootstrap'

export default function Wrapper(props) {
  return (
    <Container>
        <div className='wrapper'>
            {props.children}
        </div>
    </Container>
  )
}
