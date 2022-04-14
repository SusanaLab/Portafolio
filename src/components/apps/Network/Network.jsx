import React from 'react'
import gitt from '../Assets/gitt.png'
import web from '../Assets/web.png'
import red from '../Assets/red.png'
import './Network.css'
export const Network = () => {
  return (
    <div className='contenedorR'>
      <h1 className='titulo_1'>Transmuta</h1>
      <p className='texto_1'>
      Project focused on the creation of a Social Network which
allows any user to create an account and log in with it;
create, delete posts.
      </p>
      <h3 className='tag'>Technologies: Js, Html, Css</h3>
      <img  src={red} alt="img" className='imgNet'  />
<div>    
<a href='https://github.com/SusanaLab/CDMX011-social-network' >  <img className="gitt" src={gitt} alt="github"  /></a>
<a href='https://github.com/SusanaLab/CDMX011-social-network' >  <img className="web" src={web} alt="web"  /> </a>
  </div>
  
    </div>
  )
}
