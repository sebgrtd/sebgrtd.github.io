import React, { useRef } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const[navVisible, setNavVisible] = useState(true)
  const[activeTab, setActiveTab] = useState(0)
  const[isLoaded, setIsLoaded] = useState(false)
  const sections = document.querySelectorAll("section");

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 120)
      {
        setNavVisible(false)
      }
      else{
        setNavVisible(true)
      }
    });
  }, []);

  useEffect(() => {
    setIsLoaded(true)
    let current = 0;
    window.addEventListener('scroll', () => {
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = index;
        }
      });


      setActiveTab(current)

    })
     
  }, [isLoaded]);



  return (
    <Navbar expand="xl" style={{position:'fixed', top:'0', width:'100%', zIndex:'999'}} className={!navVisible ? 'navbar-dark bg-dark' : ''} >
    <Container>
      <Navbar.Brand href="#" style={{fontWeight:'700'}} className={!navVisible ? 'text-light' : 'text-dark'}>Gratade <span className="text-primary">Sébastien</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" className={!navVisible ? 'navbar-dark' : 'navbar-light'}/>
      <Navbar.Collapse id="navbarScroll">
        <Nav className="my-2 my-lg-0 ms-auto gap-3" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link className={activeTab === 0 ? 'active' : ''} onClick={0} href="/#section1">Accueil</Nav.Link> {/* onClick=0 prevents using the main onClick of bootstrap / permet d'éviter l'action de base de bootstrap */}
          <Nav.Link className={activeTab === 1 ? 'active' : ''} onClick={0} href="/#section2">A propos</Nav.Link>
          <Nav.Link className={activeTab === 2 || activeTab == 3 ? 'active' : ''} onClick={0} href="/#section3">Mes competences</Nav.Link>
          <Nav.Link className={activeTab === 4 ? 'active' : ''} onClick={0} href="/#section4">Mes projets</Nav.Link>
          <Nav.Link className={activeTab === 5 ? 'active' : ''} onClick={0} href="/#section5">Ce à quoi je m'interesse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
