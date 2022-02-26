import React from 'react';
import './CardProject.css'
import {Modal, Button} from 'react-bootstrap'
import { useState } from 'react';

export default function Card(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
  <div className="card-container">
    <div className='card-body bg-dark text-light justify-content-between'>
      <div className='all-content-container'>
         <div className='img-lang-container p-1'>
            <img src={props.imgSrc} style={{width:'166px', objectFit:'cover'}} className="img-fluid d-none d-md-block"></img>
            <h3 className='text-secondary text-end mt-2'>{props.language}</h3>
          </div>
          <h2 className='text-primary d-md-block'>{props.title}</h2>
        <p className='lead mt-3'>{props.text}</p>
      </div>
      <Button className='btn-primary mt-3' onClick={handleShow}>Voir plus</Button>
      <a target="_blank" rel="noopener noreferrer" href={props.github} className="btn btn-secondary btn-sm mx-2 mt-3">Voir sur GitHub</a>
    </div>
  </div>
  <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>
          <Button style={{borderRadius:'8px'}} variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  ;
}
