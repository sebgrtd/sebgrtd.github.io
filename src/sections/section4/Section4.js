import React, { useRef, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './Section4.css'

export default function Section4() {
  const first = useRef()
  const second = useRef()

  const [image1Visible ,setImage1Visible] = useState()
  const [texts1Visible, setTexts1Visible] = useState()
  const [image2Visible ,setImage2Visible] = useState()
  const [texts2Visible, setTexts2Visible] = useState()

  const containerRef = useRef()
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      const windowHeight = window.innerHeight;
      const revealTop = containerRef.current.getBoundingClientRect().top;
      const revealpoint = 550;
      if(revealTop < windowHeight - revealpoint){
        setImage1Visible(true)
        setTexts1Visible(true)
        setTimeout(() =>{
            setImage2Visible(true)
            setTexts2Visible(true)
        },800)
      }
      else{
        setImage1Visible(false)
        setTexts1Visible(false)
        setTimeout(() =>{
            setImage2Visible(false)
            setTexts2Visible(false)
        },800)
      }
    })
  }, [])

  return (
    <div ref={containerRef}>
    <img style={{width: '100%', maxWidth:'750px', position: 'absolute', right:'0', zIndex:'1'}} src={process.env.PUBLIC_URL + '/img/blob-top-3.svg'} className='img-fluid'></img>
    <Container style={{zIndex:'2', position:'relative', minHeight:'100vh'}} className='d-flex flex-column justify-content-evenly p-5 p-lg-0'>
        <Container className='d-flex flex-column flex-md-row align-items-center' ref={first}>
            <img style={{width: '75%', maxWidth:'350px'}} src={process.env.PUBLIC_URL + '/img/bootstrap-icon.svg'} className={'img-fluid logo logo-1' + (image1Visible ? ' img-visible' : '' )} ></img>
            <Container className={'mt-5 p-0 px-md-5 texts' + (texts1Visible ? ' text-visible' : '')}>
                <h2 className='text-light text-center text-md-start'>Bootstrap 5</h2>
                <p className='text-light'>Bootstrap est une framework de CSS (et également javascript) créée par des développeurs de Twitter, je l’ai utilisé partiellement pour faire cette web app. Elle est utilisée pour faciliter et accélérer la stylisation d’une page web. Je l'ai principalement utilisé pour ses boutons, containers, sa facilité d’intégration du responsive design et pour sa facilité de customisation.</p>
            </Container>
        </Container>
        <Container className='d-flex flex-column flex-md-row-reverse align-items-center mt-5' ref={second}>
            <img style={{width: '75%', maxWidth:'350px'}} src={process.env.PUBLIC_URL + '/img/react-logo.svg'} className={'img-fluid logo logo-2' + (image2Visible ? ' img-visible' : '' )}></img>
            <Container className={'mt-5 p-0 px-md-5 texts' + (texts2Visible ? ' text-visible' : '')}>
                <h2 className='text-light text-center text-md-start'>React</h2>
                <p className='text-light'>React est une framework de Javascript développée par le groupe Meta (anciennement Facebook). Elle permet de créer des applications web très rapides, en favorisant le javascript côté client lorsque c’est possible, on ne demande alors au serveur que les informations nécessaires (voir la page d’accueil de Netflix par exemple). Cette application web a été faite entièrement en React, le code source à votre disposition dans la barre d’informations.</p>
            </Container>
        </Container>
    </Container>
    </div>
  )
}
