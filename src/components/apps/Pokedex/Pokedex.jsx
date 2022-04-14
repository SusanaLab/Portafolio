import React from 'react'
import gitt from '../Assets/gitt.png'
import web from '../Assets/web.png'
import pokemon from '../Assets/pokedex.png'
import './pokedex.css'

export const Pokedex = () => {
  return (
    <div className='contenedorR'>
      <h1 className='titulo_1'>Pokedex</h1>
      <p className='texto_1'>
      Project of creation of a web page where a set of data is
visualized that can be filtered and ordered.

      </p>
      <h3 className='tag'>Technologies: Js, Html, Css</h3>
      <img  src={pokemon} alt="img" className='imgPoke'  />
<div>    
<a href='https://github.com/SusanaLab/CDMX011-data-lovers' >  <img className="gitt" src={gitt} alt="github"  /></a>
<a href='https://susanalab.github.io/CDMX011-data-lovers/' >  <img className="web" src={web} alt="web"  /> </a>
  </div>
  
    </div>
  )
}
