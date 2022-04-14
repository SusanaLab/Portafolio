import React from 'react'
import gitt from '../Assets/gitt.png'
import web from '../Assets/web.png'
import memmory from '../Assets/memmory.png'
import './Memmory.css'

export const Memmory = () => {
  return (
    <div className='contenedorR'>
      <h1 className='titulo_1'>Travel Memmory</h1>
      <p className='texto_1'>
      Construction project of a web version of the Memory Match
game, in which a player can play alone, in the browser.

      </p>
      <h3 className='tag'>Technologies: Js, Html, Css</h3>
      <img  src={memmory} alt="img" className='imgMemo'  />
<div>    
<a href='https://github.com/SusanaLab/CDMX011-memory-match' >  <img className="gitt" src={gitt} alt="github"  /></a>
<a href='https://susanalab.github.io/CDMX011-memory-match/' >  <img className="web" src={web} alt="web"  /> </a>
  </div>
    </div>
  )
}
