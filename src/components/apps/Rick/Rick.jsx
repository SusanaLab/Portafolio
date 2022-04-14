import React from 'react'
import gitt from '../Assets/gitt.png'
import web from '../Assets/web.png'
import morty from '../Assets/morty.png'
import './Rick.css'

export const Rick = () => {
  return (
    <div className='contenedorR'>
      <div className='all'>
      <h1 className='titulo_1'>Rick and Morty</h1>
      <p className='texto_1'>
      Web page where a data set is displayed, searches can be
carried out or characters can be added to favorites 
      </p>
      <h3 className='tag'>Technologies: Js, Html, Css, React</h3>
      <img  src={morty} alt="img" className='imgRick'  />
<div className='rm'>    
<a href='https://github.com/SusanaLab/Rick-And-Morty' >  <img className="gitt" src={gitt} alt="github"  /></a>
<a href='https://susanalab.github.io/Rick-And-Morty/' >  <img className="web" src={web} alt="web"  /> </a>
  </div>
  </div></div>
  )
}
