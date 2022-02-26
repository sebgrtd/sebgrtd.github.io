import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import './Section2.css'

export default function Section2() {
  const containerRef = useRef()
  const [titleVisible, setTitleVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      const windowHeight = window.innerHeight;
      const revealTop = containerRef.current.getBoundingClientRect().top;
      const revealpoint = 550;
      if(revealTop < windowHeight - revealpoint){
        setTitleVisible(true)
        setTimeout(() =>{
          setTextVisible(true)
        },800)
      }
      else{
        setTitleVisible(false)
        setTimeout(() =>{
          setTextVisible(false)
        },800)
      }
    })
  }, [])

  return (
    <div style={{backgroundImage: "url(/img/background-p-2.svg)"}} className='background d-flex align-items-center'> 
        <Container className='py-5 text-light' ref={containerRef}>
            <h1 className={'text-center pt-5' + (titleVisible ? ' visible' : ' not-visible')}>Mais laissez moi me présenter...</h1>
            <Container className='py-3 d-flex flex-column flex-xxl-row-reverse align-items-center gap-4'>
                <img src={process.env.PUBLIC_URL + '/img/undraw_mathematics.svg'} className={'img-fluid' + (textVisible ? ' img-visible' : ' img-not-visible')}></img>
                <div className={'text-presentation-container pt-5' + (textVisible ? ' visible' : ' not-visible')}>
                  <div>
                    <h2>Qui suis-je?</h2>
                    <p>Lycéen de 17 ans né à Calais, je suis le benjamin d’une famille de trois enfants. Je me passione pour l'informatique, la programmation, le développement ou encore les jeux vidéo. Parralélement, je porte un certain intêret à la cuisine et la pâtisserie.</p>
                  </div>
                  <div>
                    <h2>Mes spécialités et pourquoi celles-ci? </h2>
                    <ul>
                      <li><p><span style={{fontWeight:'600'}}>En 1ère :</span> physique chimie, mathématiques et NSI. J’aime beaucoup résoudre des problèmes et la logique lié aux mathématiques que l’on retrouve alors dans les deux autres spécialités.</p></li>  
                      <li><p><span style={{fontWeight:'600'}}>En terminale :</span> Je ne garde que mathématiques et NSI pour me spécialiser un peu plus dans la partie « informatique ».</p></li>
                    </ul> 
                    </div>
                  <div>
                    <h2>Pourquoi tant d’intérêt pour l’informatique?</h2>
                    <p>Ma première expérience informatique remonte à 2018 : je commence à coder, je suis alors en 4ème. Entrecoupé de longues pauses, cette introduction à la programmation s’est faite sans aucune feuille de route ce qui me faisait abandonner à maintes reprises. Mais la spécialité NSI,(Numériques et Sciences de l’Informatique), débuté en première, a changé ma vision de la programmation. Je me mets alors à apprendre divers langages par le biais d’internet. Grâce à ceux-ci, je réalise quelques projets, que vous pourrez retrouver dans la section "mes projets". Cette application web illustre d’ailleurs parfaitement les compétences dont je me suis acquéri jusqu'à aujourd'hui. Pour le réaliser, je me suis formé sur le web design et la réalisation de maquettes avec Adobe XD puis sur le HTML, le CSS classique mais aussi sa framework Bootstrap et le JavaScript et sa framework la plus utilisée: React.</p>
                  </div>
                  <div>
                    <h2>Qu’est ce que je vise?</h2>
                    <p>Dans le futur, je pense me spécialiser dans la très prometteuse blockchain et le web qui sera encore plus omniprésent. Finalement, pourquoi pas meme finir par lancer ma startup lorsque les acquis seront là, comme on dit: « qui ose gagne ! »</p>
                  </div>
                </div>
            </Container>
        </Container>
    </div>
  )
}
