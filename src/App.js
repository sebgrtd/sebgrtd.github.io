import './App.css'
import Footer from './footer/Footer';
import Section6 from './sections/section6/section6';
import Section5 from './sections/section5/Section5';
import Section4 from './sections/section4/Section4';
import Section3 from './sections/section3/Section3';
import Section2 from './sections/section2/Section2';
import Section1 from './sections/section1/Section1';
import NavBar from './components/NavBar';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


import Competence from './competences/Competence';

import {Routes, Route, useLocation} from 'react-router-dom';




function App() {
  const location = useLocation();


  return (
    <>
      <NavBar />
      <section id="section1">
        <Section1 />
      </section>
      <section id="section2">
        <Section2 />
      </section>
      <section id="section3">
      <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={1300}>
        <Routes location={location}>
          <Route path='/' element={<Section3 />}/>
          <Route path='/voirplus' element={<Competence />} />
        </Routes>
        </CSSTransition>
        </TransitionGroup>
      </section>
      <section className='bg-dark' id="section3-2">
        <Section4 />
      </section>
      <section id="section4">
        <Section5 />
      </section>
      <section id="section5">
        <Section6 />
      </section>
      <Footer />
    </>
  );
}

export default App;