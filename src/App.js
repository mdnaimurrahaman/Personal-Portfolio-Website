
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
import Skills from './Components/Skills/Skills';
import Testimonials from './Components/Testimonials/Testimonials';


function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Skills/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      
    </>
  );
}

export default App;
