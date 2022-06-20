
import './App.css';
import About from './Components/About/About';
import Brand from './Components/Brand/Brand';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
import Footer from './Components/Shared/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Testimonials from './Components/Testimonials/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {


  useEffect(()=>{
    AOS.init({
      
    });
  },[]);

  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Brand/>
      <Skills/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
