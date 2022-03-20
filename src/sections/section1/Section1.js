import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import './Section1.css'

export default function Section1() {
  const imgRef = useRef();
  const titleRef = useRef();
  const paragraphRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      imgRef.current.style = 'opacity: 1'
      setTimeout(() => {
        titleRef.current.style = 'opacity: 1'
        setTimeout(() => {
          paragraphRef.current.style = 'opacity: 1'
          setTimeout(() => {
            btnRef.current.style = 'opacity: 1'
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000) 
  })

  return (
    <div style={{position:'relative', minHeight:'100vh', overflow:'hidden'}} className="section1-container d-flex align-items-center justify-content-between">
        <Container style={{ marginBottom:'8%' }} className='d-flex flex-column align-items-center'>
            <div className='section1-image rounded-circle border border-5 border-primary' ref={imgRef}>
                <img style={{width:'256px', height:'256px', borderRadius:'50%', objectFit:'cover'}} src={process.env.PUBLIC_URL + '/img/photo-profil.jpg'} className='img-fluid'></img>
            </div>
            <h1 className='mt-5 text-center text-dark' ref={titleRef} >Moi c'est <span className='text-primary'>Sébastien</span></h1>
            <p style={{fontSize:'16px'}} ref={paragraphRef} >Lycéen</p>
            <a href="#section2" className="btn btn-primary btn-lg" ref={btnRef}>Voir ma présentation</a>
        </Container>
        <img src={process.env.PUBLIC_URL + '/img/wave-bot-1.svg'} className='wave img-fluid'></img>
    </div>
  )
}
