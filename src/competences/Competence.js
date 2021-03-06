import React, { useEffect, useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import './Competences.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Competence(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const texts = useRef()
  const containerRef = useRef();

  useEffect(() => {
    if (location.state == null){
      navigate('/')
    }
    if (window.innerWidth < 992){
      texts.current.scrollIntoView();
    }
    setTimeout(() => {
      props.onLoad();
    }, 100)  
    
  }, [])

  return (
    <div ref={containerRef}>
      <div className='imgContainer' >
        <img style={{minHeight:'300px', objectFit:'cover'}} src={process.env.PUBLIC_URL + '/img/wave-top-1.svg'} className='img-fluid'></img>
        <Link to="/"><img className='title close-icon' src={process.env.PUBLIC_URL + '/img/close-icon.svg'}></img></Link>
      </div>
      <div className='d-flex align-items-center py-5 container-voirplus' ref={texts}>
        <Container className='d-flex flex-column-reverse flex-xl-row px-5 px-lg-0 py-5 gap-5'>
        <Button className='d-lg-none' onClick={() => navigate(-1)}>Voir tout</Button>
          <div className='texts d-flex flex-column gap-3'>
            <h1 style={{fontWeight:'700', fontSize:'34px'}} className='pb-4 d-none d-xl-block'>{location.state?.title}</h1>
            <div>
              <h1 className='pb-2' style={{fontSize:'26px', fontWeight:'500'}} >Comment ai-je appris ?</h1>
              <p> {location.state?.t1} </p>
            </div>
            <div>
              <h1 className='pb-2' style={{fontSize:'26px', fontWeight:'500'}} >Qu'est ce que je sais faire avec?</h1>
              <p> {location.state?.t2} </p>
            </div>
          </div>
          <img className='illustration img-fluid pb-5' style={{maxHeight: '300px'}} src={process.env.PUBLIC_URL + '/img/' + location.state?.img}></img>  
        </Container>
      </div>
    </div>
  )
}
