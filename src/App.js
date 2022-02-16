import './App.css'
import Footer from './footer/Footer';
import Section6 from './sections/section6/section6';
import Section5 from './sections/section5/Section5';
import Section4 from './sections/section4/Section4';
import Section3 from './sections/section3/Section3';
import Section2 from './sections/section2/Section2';
import Section1 from './sections/section1/Section1';
import NavBar from './components/NavBar';

import Competence from './competences/Competence';

import {Routes, Route} from 'react-router-dom';




function App() {
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
        <Routes>
          <Route path='/' element={<Section3 />} />
          <Route path='/voirplus' element={<Competence />} />
        </Routes>
      </section>
      <section className='bg-dark'>
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