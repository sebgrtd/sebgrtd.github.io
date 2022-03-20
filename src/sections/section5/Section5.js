import { React, useState, useRef, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import Card from '../../components/CardProject';
import Wrapper from '../../Layout/Wrapper';
import './Section5.css'
import Axios from 'axios';

export default function Section5() {
  const[projectList, setProjectList] = useState([]);

  const getProjects = () => {
    Axios.get("https://portfolio-seb-grtd.herokuapp.com/getprojects", {
      
    })
    .then((res) => {
      console.log(res);
      setProjectList(res.data);
    })
  }
  
  const containerRef = useRef()
  const [titleVisible, setTitleVisible] = useState(false)
  const [imgTextVisible, setImgTextVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      const windowHeight = window.innerHeight;
      const revealTop = containerRef.current.getBoundingClientRect().top;
      const revealpoint = 550;
      if(revealTop < windowHeight - revealpoint){
        setTitleVisible(true)
        setTimeout(() =>{
          setImgTextVisible(true)
          setTimeout(() =>{
            setProjectsVisible(true)
          },800)
        },800)
      }
      else{
        setTitleVisible(false)
        setTimeout(() =>{
          setImgTextVisible(false)
          setTimeout(() =>{
            setProjectsVisible(false)
          },800)
        },800)
      }
    })
    getProjects();
  }, [])
  

  return <div ref={containerRef}>
    <div style={{height:'330px'}} className='imgContainer'>
          <img  src={process.env.PUBLIC_URL + '/img/blob-top-2.svg'} className='img-fluid'></img>
          <h1 className={'title text-dark' + (titleVisible ? ' title-visible' : '')}>MES PROJETS</h1>
    </div>
    <Container className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
      <Col className='col-9 col-lg-3'>
        <img src={process.env.PUBLIC_URL + '/img/undraw_code_review.svg'} className={'img-fluid illustration' + (imgTextVisible ? ' img-visible' : '')}></img>
      </Col>
      <Col className='col-12 col-lg-8'>
       <p style={{ fontSize: '23px' }} className={'py-4 py-lg-0 px-5 texte-presentation' + (imgTextVisible ? ' text-visible' : '')}>Ici vous retrouverez une partie des projets que j’ai réalisés qu’ils soient personnels ou scolaires ainsi qu’un lien GitHub vers leur code source. Ces projets témoignent de mon intérêt pour la programmation dans divers langages, liés au web ou non. Le plus vieux projet sur ce site date de la mi-2021, je ferai en sorte de les mettre à jour régulièrement. </p>
      </Col>
     </Container>
    <div className={'container-projets ' +(projectsVisible ? 'projets-visible' : '')}>
      <Wrapper>
        { projectList.map((val, key) => {
          return(
          <Card key={key}
          title={val['titre']} 
          language={val['language']}  
          text={val['description']}  
          imgSrc={process.env.PUBLIC_URL + '/img/' + val['image']}
          github={val['lien']}  
        />
        )}) }
      </Wrapper> 
    </div>
    <img style={{width: '100%', margin:'0'}} src={process.env.PUBLIC_URL + '/img/wave-top-2.svg'} className='img-fluid'></img>
  </div>;
}
