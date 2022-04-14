import Banner from "../Banner/Banner";
import About from "../About/About";
import Projects from '../Proyect/Projects'
import Background from '../Back/Background'
import Contacto from '../Contac/Contacto'
import Header from "../Header/Header";
import './Componentes.css'
import Social from "../Social/Social";

function Componentes() {
  return (
    <div className="Componentes_3" >
     <Header/>
     <Banner/>  
     <About/>
    <Projects/> 
    <Background/>
    <Contacto/>
    <Social/>
   
    </div>
  );
}
export default Componentes;