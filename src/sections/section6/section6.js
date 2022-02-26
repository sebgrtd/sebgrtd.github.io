import {React, useEffect, useState, useRef} from 'react';
import { Container } from 'react-bootstrap'
import HeroSlider from '../../components/HeroSlider';
import './section6.css'


export default function Section6() {
    const containerRef = useRef()
    const[titleVisible, setTitleVisible] = useState(false)
    const[sliderVisible, setSliderVisible] = useState(false)
    useEffect(() => {
      window.addEventListener('scroll', () =>{
        const windowHeight = window.innerHeight;
        const revealTop = containerRef.current.getBoundingClientRect().top;
        const revealpoint = 550;
        if(revealTop < windowHeight - revealpoint){
          setTitleVisible(true)
          setTimeout(() =>{
            setSliderVisible(true)
          },800)
        }
        else{
          setTitleVisible(false)
          setTimeout(() =>{
            setSliderVisible(false)
          },800)
        }
      })
    }, [])

  return <div ref={containerRef}>
        <div style={{ backgroundImage:'url("/img/wave-bot-2.svg")'}} className='container-band-title d-flex'>
            <Container> 
                 <h1 className={'text-dark title' + (titleVisible ? ' title-visible' : '')}>Ce à quoi je m'interesse</h1>
            </Container>
        </div>
        <Container className={'d-flex align-self-center p-2 p-md-5 container-slider' + (sliderVisible ? ' slider-visible' : '')}>
            <HeroSlider />
        </Container>
    </div>;
}
