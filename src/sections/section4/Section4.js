import React from 'react'
import { Container } from 'react-bootstrap'


export default function Section4() {
  return (
    <>
    <img style={{width: '100%', maxWidth:'750px', position: 'absolute', right:'0', zIndex:'1'}} src={process.env.PUBLIC_URL + '/img/blob-top-3.svg'} className='img-fluid'></img>
    <Container style={{zIndex:'2', position:'relative', minHeight:'100vh'}} className='d-flex flex-column justify-content-evenly p-5 p-lg-0'>
        <Container className='d-flex flex-column flex-md-row align-items-center'>
            <img style={{width: '75%', maxWidth:'350px'}} src={process.env.PUBLIC_URL + '/img/bootstrap-icon.svg'} className='img-fluid'></img>
            <Container className='mt-5 p-0 px-md-5'>
                <h2 className='text-light text-center text-md-start'>Bootstrap 5</h2>
                <p className='text-light'>Bootstrap est une framework de CSS (et également javascript) créée par des développeurs de Twitter, je l’ai utilisé partiellement pour faire cette web app. Elle est utilisée pour faciliter et accélérer la stylisation d’une page web. Je l'ai principalement utilisé pour ses boutons, containers, sa facilité d’intégration du responsive design et pour sa facilité de customisation.</p>
            </Container>
        </Container>
        <Container className='d-flex flex-column flex-md-row-reverse align-items-center mt-5'>
            <img style={{width: '75%', maxWidth:'350px'}} src={process.env.PUBLIC_URL + '/img/react-logo.svg'} className='img-fluid'></img>
            <Container className='mt-5 p-0 px-md-5'>
                <h2 className='text-light text-center text-md-start'>React</h2>
                <p className='text-light'>React est une framework de Javascript développée par le groupe Meta (anciennement Facebook). Elle permet de créer des applications web très rapides, en favorisant le javascript côté client lorsque c’est possible, on ne demande alors au serveur que les informations nécessaires (voir la page d’accueil de Netflix par exemple). Cette application web a été faite entièrement en React, le code source à votre disposition dans la barre d’informations.</p>
            </Container>
        </Container>
    </Container>
    </>
  )
}
