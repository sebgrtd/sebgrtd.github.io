import {React, useState, useEffect, useRef} from 'react'
import './Section3.css'
import CardCompetence from '../../components/CardCompetence'
import { Container } from 'react-bootstrap'

export default function Section3(props){
  const [card1Visible, setCard1Visible] = useState(false)
  const [card2Visible, setCard2Visible] = useState(false)
  const [card3Visible, setCard3Visible] = useState(false)
  const [card4Visible, setCard4Visible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)



  const containerRef = useRef()
  
  function animationOnScroll(timeout){
    if (containerRef.current == null){
        return null
    }
    const windowHeight = window.innerHeight;
    const revealTop = containerRef.current.getBoundingClientRect().top;
    const revealpoint = 550;
    if(revealTop < windowHeight - revealpoint){
      setTitleVisible(true)
      setCard1Visible(true)
      setTimeout(() =>{
          setCard2Visible(true)
          setTimeout(() =>{
              setCard3Visible(true)
              setTimeout(() =>{
                  setCard4Visible(true)
              },timeout)
          },timeout)
      },timeout)
    }
    else{
    setTitleVisible(false)
      setCard1Visible(false)
      setTimeout(() =>{
          setCard2Visible(false)
          setTimeout(() =>{
              setCard3Visible(false)
              setTimeout(() =>{
                  setCard4Visible(false)
              },timeout)
          },timeout)
      },timeout)
    }
  }

  useEffect(() => {
    animationOnScroll(400);
    window.addEventListener('scroll', () =>{
      animationOnScroll(800)
    })
    props.onLoad();  
  }, [])

  return (
    <div ref={containerRef}>
        <div className='imgContainer'>
            <img style={{minHeight:'300px', objectFit:'cover'}} src={process.env.PUBLIC_URL + '/img/wave-top-1.svg'} className='img-fluid'></img>
            <h1 className={'title ' + (titleVisible ? 'title-visible' : '')}>MES COMPETENCES</h1>
        </div>
        <Container className='d-flex flex-column flex-lg-row flex-wrap px-0 py-5 align-items-center gap-2'>
            <div className='d-flex flex-column flex-md-row gap-3 mx-xxl-1 mx-auto'>
                <CardCompetence 
                    title='HTML'
                    text="Acronyme de HyperText Markup Language, c'est un langage de balisage omniprésent sur internet. C’est lui qui structure nos pages web, les mets en forme etc… . En bref, si une page web était un bâtiment, HTML serait ses fondations!"
                    img="html-logo.svg"
                    t1="Apprendre le langage HTML n’était pas chose compliquée. Nous avions déjà un peu vu celui-ci en première. Ainsi, je me suis contenté de me former à l’aide de la vidéo de deux heures de ‘freecodecamp’ sur youtube que j’avais mis en vitesse x2."
                    t2="Je pense pouvoir dire que je maîtrise ce langage, j’arrive à structurer sans problèmes une page web en m’aidant des balises adaptées. Cette application utilisait certes du JSX qui n’est convertit en HTML qu’après compilation, mais vous pourrez retrouver deux projets que j’ai fait en me basant 100% sur HTML dans ‘Mes projets’." 
                    isVisible={card1Visible}
                />
                <CardCompetence 
                    title='CSS'
                    text="C’est l’acronyme de Cascading Style Sheets. CSS permet lui de rendre la page web plus belle en contrôlant l’affichage de chaque élément HTML."
                    img="css-logo.svg"
                    t1="CSS était quant à lui plus complexe à apprendre, notamment pour les ‘flexbox” et les 'position : absolute', j’ai pu dans un premier temps apprendre les bases avec W3Schools.com et grâce à des cours sur youtube, mais c’est principalement les tutos qui me permettent d’être en perpétuel apprentissage des possibilités qu’offrent ce langage." 
                    t2="En m’aidant d’internet et de mes connaissances, j’arrive plus ou moins facilement à styliser mon HTML selon une idée bien illustrée ou bien représentée dans ma tête. J’arrive également à adapter ce CSS selon la taille du navigateur où se trouve la page en question.
                    Cette application est un exemple de mes compétences en CSS, il en est de même pour les autres pages web que j’ai faite que vous verrez dans dans l’onglet “mes projets”."
                    isVisible={card2Visible}
                />
            </div>
            <div className='d-flex flex-column flex-md-row gap-3 mx-xxl-1 mx-auto'>
            <CardCompetence 
                title='JavaScript'
                text="JavaScript est le language qui nous a fait passer au Web 2, en effet les sites web sont à l’origine statiques, on consulte le web pour voir de l’information. Avec l’apparition de JavaScript, les pages web deviennent dynamiques! C’est un language qui est exécuté directement par le navigateur et permet de gérer par exemple, le click sur un bouton."
                img="javascript-logo.svg"
                t1="Pour ce qui est de JS j’ai cherché à apprendre directement comment manipuler les éléments du DOM (Document object model) grâce aux tutos et à W3Schools, le langage en lui même ressemblant à d’autres langages que j’avais déjà utilisé (c++, python). Puis au fur et à mesure que j’utilisais javascript j’ai pu apprendre des petites astuces pour rendre mon code plus léger comme l’opérateur conditionnel (Exemple: condition ? si validé : si pas validé )."
                t2="J’arrive à intégrer des interactions entre les éléments de la page celle-ci, cependant je me retrouve parfois à presque copier coller à 100% du code trouvé sur internet, ici c’est le cas pour le script qui met en valeur l’onglet de la navbar ‘actif’ lorsque l’on scroll. Le code source de l’app est à votre disposition (voir barre d’informations tout en bas)  pour voir plus d’exemples. "
                isVisible={card3Visible}
            />
            <CardCompetence 
                title='Adobe Xd'
                text="Abréviation de Adobe Expérience Design. C’est  donc un logiciel de la suite Adobe Creative Cloud. Celui ci nous permet de réaliser des prototypes et des maquettes d’interfaces utilisateur digitales, divisant alors le travail de création d’une application, d’abord la réalisation de l’interface par les designers puis la conception de celle-ci par les développeurs."
                img="adobe-xd-logo.svg"
                t1="J’ai pu apprendre à utiliser Adobe XD en regardant un crash course de deux heures, crash course où j’ai d’ailleurs trouvé une partie de l’inspiration pour ce site. J’ai également regardé quelques tutos sur youtube, particulièrement pour la navbar qui reste en haut et change de couleur en scrollant."
                t2="Avec ce logiciel de la suite Adobe, j’arrive à designer une interface utilisateur dans son ensemble pour la rendre facile à exploiter lors de la phase de développement, j’arrive également à ajouter des prototypes d’animations. Finalement, j’arrive à faire une maquette de l'interface pour plusieurs types d’écrans. Vous pourrez retrouver le fichier du projet avec le code source dans la barre d’informations tout en bas."
                isVisible={card4Visible}
            />
            </div>
        </Container>
    </div>
  )
}
