import React from 'react'
import './Banner.css'
import me from './me.png'
import CV from './su.pdf'
function Banner () {
  return (
    <div className="intro">
     <div className="img">
        <img  src={me} alt="img" className='banner'  />
     </div>
     <div className="texto">
       <p className="frontend">Hello World!</p>
       <p className="nombre"> I'm Susana Garcia, a Frontend web developer </p>
       <button type="button" className="CV">
           <a type="button" href={CV} download="Susana_Garcia_Frontend" target="_blank" rel="noreferrer" ><span>Download CV</span></a>
       </button>
     </div>
   </div>
  )
}
export default Banner