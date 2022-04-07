import { Link } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Projects from './components/Proyect/Projects'
import Background from './components/Back/Background'
import Contacto from './components/Contac/Contacto'
import Header from "./components/Header/Header";
import './App.css'

export default function App() {
  return (
    <div className="App" >
     <Header/>
     <Banner/> 
    
     {/* <Projects/> 
     <Background/> <About/>
    
    
     <Contacto/>
     <Header/> */}
    </div>
  );
}