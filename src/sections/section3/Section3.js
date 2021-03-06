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
                    text="Acronyme de HyperText Markup Language, c'est un langage de balisage omnipr??sent sur internet. C???est lui qui structure nos pages web, les mets en forme etc??? . En bref, si une page web ??tait un b??timent, HTML serait ses fondations!"
                    img="html-logo.svg"
                    t1="Apprendre le langage HTML n?????tait pas chose compliqu??e. Nous avions d??j?? un peu vu celui-ci en premi??re. Ainsi, je me suis content?? de me former ?? l???aide de la vid??o de deux heures de ???freecodecamp??? sur youtube que j???avais mis en vitesse x2."
                    t2="Je pense pouvoir dire que je ma??trise ce langage, j???arrive ?? structurer sans probl??mes une page web en m???aidant des balises adapt??es. Cette application utilisait certes du JSX qui n???est convertit en HTML qu???apr??s compilation, mais vous pourrez retrouver deux projets que j???ai fait en me basant 100% sur HTML dans ???Mes projets???." 
                    isVisible={card1Visible}
                />
                <CardCompetence 
                    title='CSS'
                    text="C???est l???acronyme de Cascading Style Sheets. CSS permet lui de rendre la page web plus belle en contr??lant l???affichage de chaque ??l??ment HTML."
                    img="css-logo.svg"
                    t1="CSS ??tait quant ?? lui plus complexe ?? apprendre, notamment pour les ???flexbox??? et les 'position : absolute', j???ai pu dans un premier temps apprendre les bases avec W3Schools.com et gr??ce ?? des cours sur youtube, mais c???est principalement les tutos qui me permettent d?????tre en perp??tuel apprentissage des possibilit??s qu???offrent ce langage." 
                    t2="En m???aidant d???internet et de mes connaissances, j???arrive plus ou moins facilement ?? styliser mon HTML selon une id??e bien illustr??e ou bien repr??sent??e dans ma t??te. J???arrive ??galement ?? adapter ce CSS selon la taille du navigateur o?? se trouve la page en question.
                    Cette application est un exemple de mes comp??tences en CSS, il en est de m??me pour les autres pages web que j???ai faite que vous verrez dans dans l???onglet ???mes projets???."
                    isVisible={card2Visible}
                />
            </div>
            <div className='d-flex flex-column flex-md-row gap-3 mx-xxl-1 mx-auto'>
            <CardCompetence 
                title='JavaScript'
                text="JavaScript est le language qui nous a fait passer au Web 2, en effet les sites web sont ?? l???origine statiques, on consulte le web pour voir de l???information. Avec l???apparition de JavaScript, les pages web deviennent dynamiques! C???est un language qui est ex??cut?? directement par le navigateur et permet de g??rer par exemple, le click sur un bouton."
                img="javascript-logo.svg"
                t1="Pour ce qui est de JS j???ai cherch?? ?? apprendre directement comment manipuler les ??l??ments du DOM (Document object model) gr??ce aux tutos et ?? W3Schools, le langage en lui m??me ressemblant ?? d???autres langages que j???avais d??j?? utilis?? (c++, python). Puis au fur et ?? mesure que j???utilisais javascript j???ai pu apprendre des petites astuces pour rendre mon code plus l??ger comme l???op??rateur conditionnel (Exemple: condition ? si valid?? : si pas valid?? )."
                t2="J???arrive ?? int??grer des interactions entre les ??l??ments de la page celle-ci, cependant je me retrouve parfois ?? presque copier coller ?? 100% du code trouv?? sur internet, ici c???est le cas pour le script qui met en valeur l???onglet de la navbar ???actif??? lorsque l???on scroll. Le code source de l???app est ?? votre disposition (voir barre d???informations tout en bas)  pour voir plus d???exemples. "
                isVisible={card3Visible}
            />
            <CardCompetence 
                title='Adobe Xd'
                text="Abr??viation de Adobe Exp??rience Design. C???est  donc un logiciel de la suite Adobe Creative Cloud. Celui ci nous permet de r??aliser des prototypes et des maquettes d???interfaces utilisateur digitales, divisant alors le travail de cr??ation d???une application, d???abord la r??alisation de l???interface par les designers puis la conception de celle-ci par les d??veloppeurs."
                img="adobe-xd-logo.svg"
                t1="J???ai pu apprendre ?? utiliser Adobe XD en regardant un crash course de deux heures, crash course o?? j???ai d???ailleurs trouv?? une partie de l???inspiration pour ce site. J???ai ??galement regard?? quelques tutos sur youtube, particuli??rement pour la navbar qui reste en haut et change de couleur en scrollant."
                t2="Avec ce logiciel de la suite Adobe, j???arrive ?? designer une interface utilisateur dans son ensemble pour la rendre facile ?? exploiter lors de la phase de d??veloppement, j???arrive ??galement ?? ajouter des prototypes d???animations. Finalement, j???arrive ?? faire une maquette de l'interface pour plusieurs types d?????crans. Vous pourrez retrouver le fichier du projet avec le code source dans la barre d???informations tout en bas."
                isVisible={card4Visible}
            />
            </div>
        </Container>
    </div>
  )
}
