import React from 'react';
import './CardProject.css'
import {Container, Button} from 'react-bootstrap'

export default function Card(props) {
  return <div className="card-container">
    <div className='card-body bg-dark text-light justify-content-between'>
      <div className='all-content-container'>
         <div className='img-lang-container p-1'>
            <img src={props.imgSrc} style={{width:'166px', objectFit:'cover'}} className="img-fluid d-none d-md-block"></img>
            <h3 className='text-secondary text-end mt-2'>{props.language}</h3>
          </div>
          <h2 className='text-primary d-md-block'>{props.title}</h2>
        <p className='lead mt-3'>{props.text}</p>
      </div>
      <Button className='btn-primary mt-3'>Voir plus</Button>
      <a href={props.github} class="btn btn-secondary btn-sm mx-2 mt-3">Voir sur GitHub</a>
    </div>
  </div> ;
}
