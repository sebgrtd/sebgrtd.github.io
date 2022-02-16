import React from 'react';
import { Container } from 'react-bootstrap'
import HeroSlider from '../../components/HeroSlider';
import './section6.css'


export default function Section6() {
  return <>
        <div style={{ backgroundImage:'url("/img/wave-bot-2.svg")'}} className='container-band-title d-flex'>
            <Container> 
                 <h1 className='text-dark'>Ce à quoi je m'interesse</h1>
            </Container>
        </div>
        <Container className='d-flex align-self-center p-2 p-md-5'>
            <HeroSlider />
        </Container>
    </>;
}
