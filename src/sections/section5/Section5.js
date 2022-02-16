import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Card from '../../components/CardProject';
import Wrapper from '../../Layout/Wrapper';
import './Section5.css'


export default function Section5() {
  return <>

    <div style={{height:'330px'}} className='imgContainer'>
          <img  src={process.env.PUBLIC_URL + '/img/blob-top-2.svg'} className='img-fluid'></img>
          <h1 className='title text-dark'>MES PROJETS</h1>
    </div>
    <Container className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
      <Col className='col-9 col-lg-3'>
        <img src={process.env.PUBLIC_URL + '/img/undraw_code_review.svg'} className='img-fluid'></img>
      </Col>
      <Col className='col-12 col-lg-8'>
       <p style={{ fontSize: '20px' }} className=' py-4 py-lg-0 px-5'>Ici vous retrouverez une partie des projets que j’ai réalisés qu’ils soient personnels ou scolaires ainsi qu’un lien GitHub vers leur code source. Ces projets témoignent de mon intérêt pour la programmation dans divers langages, liés au web ou non. Le plus vieux projet sur ce site date de la mi-2021, je ferai en sorte de les mettre à jour régulièrement. </p>
      </Col>
     </Container>
    <Wrapper style={{}}>
      <Card 
        title="Algorithmes sur les graphes NSI" 
        language="Python" 
        text="Il s’agit d’un DM de NSI où nous devions nous baser sur un fichier .JSON contenant des informations sur toutes les communes de France, pour par exemple trouver les distances les plus courtes entre deux communes, qu’elles soient en nombre de communes ou en kilomètres."
        imgSrc={process.env.PUBLIC_URL + '/img/graphe_carte.png'}
        github='https://github.com/sebgrtd/projets/blob/main/Graphes.ipynb'
      />
      <Card 
        title="Site web NSI" 
        language="HTML CSS JS" 
        text="C’est un site web que nous avions à faire en guise de dm pour expliquer ce qu’étaient les SoC(system on a chip) vus en cours. Je me suis beaucoup amusé à le faire et à essayer de le rendre beau ! Donc si vous voulez en savoir plus sur les SoC… n’hésitez pas à y jeter un œil!"
        imgSrc={process.env.PUBLIC_URL + '/img/site_nsi.png'}
        github='https://github.com/sebgrtd/projets/blob/main/Julien%20et%20S%C3%A9bastien%20Site%20Soc.zip'
      />
        <Card 
        title="V1 de mon site" 
        language="HTML CSS JS" 
        text="Eh oui, vous êtes sur la v2 de mon site! J’avais fait une première version au fur et à mesure que j'acquérais les bases sur le développement web, puis j’ai décidé de le refaire avec plus de moyens! Vous pourrez donc avoir une idée de mes progrès entre décembre et février."
        imgSrc={process.env.PUBLIC_URL + '/img/site_1.png'}
        github='https://github.com/sebgrtd/v1_site_seb'
      />
      <Card 
        title="Algorithmes Skylines NSI" 
        language="Python" 
        text="Un DM de NSI où nous devions finir par parvenir à fournir un algorithme qui fusionnent deux skyline en une seule. Je conçois que ça ne sonne pas très clair comme ça, raison de plus pour aller y jeter un oeil et ouvrir le projet sur un jupyter Notebook!"
        imgSrc={process.env.PUBLIC_URL + '/img/skyline.png'}
        github='https://github.com/sebgrtd/projets/blob/main/Skyline.ipynb'
      />
        <Card 
        title="Générateur de triangles de Pascal" 
        language="C++" 
        text="Deuxième projet C++, fait après avoir vu les dits triangles de Pascal en option Maths Expertes. Certaines parties du code restent optimisables mais j’ai beaucoup appris avec ce projet, notamment sur l’allocation dynamique de la mémoire en c++. Il y a également la possibilité de calculer les lois binomiales vues en spé maths avec ce programme."
        imgSrc={process.env.PUBLIC_URL + '/img/pascal.jpg'}
        github='https://github.com/sebgrtd/projets/blob/main/pascal%20le%20bro.rar'
      />
      <Card 
        title="Clone calculatrice Windows" 
        language="C++" 
        text="En guise d’introduction à C++ j’ai voulu essayer de refaire la calculatrice de windows 11 et ses fonctionnalités notamment avec les raccourcis claviers, je me suis retrouvé rapidement bloqué lorsqu’il s’agissait de la partie ‘stylisation’, qui m’a fait abandonner ce projet."
        imgSrc={process.env.PUBLIC_URL + '/img/calculatrice.jpg'}
        github='https://github.com/sebgrtd/projets/blob/main/Calculatrice.rar'
      />
    </Wrapper> 
      <img style={{width: '100%', margin:'0'}} src={process.env.PUBLIC_URL + '/img/wave-top-2.svg'} className='img-fluid'></img>
    </>;
}
