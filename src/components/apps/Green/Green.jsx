import React from 'react'
import gitt from '../Assets/gitt.png'
import web from '../Assets/web.png'
import green from '../Assets/green.png'
import './Green.css'

export const Green = () => {
  return (
    <div className='contenedorR'>
      <h1 className='titulo_1'>GreeNotes</h1>
      <p className='texto_1'>
      Development of a web app to take notes, which allows you to
create, delete and consult the notes and log in.
      </p>
      <h3 className='tag'>Technologies: Js, Html, Css, React, Firebase </h3>
      <img  src={green} alt="img" className='imgGreen'  />
<div>    
<a href='https://github.com/SusanaLab/CDMX011-lab-notes' >  <img className="gitt" src={gitt} alt="github"  /></a>
<a href='https://greenotes-22247.firebaseapp.com/' >  <img className="web" src={web} alt="web"  /> </a>
  </div>
  
    </div>
  )
}
