import React from 'react'
import gitt from '../Assets/gitt.png'
import web from '../Assets/web.png'
import lista from '../Assets/lista.png'
import './List.css'

export const List = () => {
  return (
    <div className='contenedorR'>
      <h1 className='titulo_1'>Learning List</h1>
      <p className='texto_1'>
     Web application where the user can create a list of topics to learn, can create a topic, mark it as learned, delete it and search by topic
      </p>
      <h3 className='tag'>Technologies: Js, Html, Css, React </h3>
      <img  src={lista} alt="img" className='imgList'  />
<div>    
<a href='https://github.com/SusanaLab/learning-list' >  <img className="gitt" src={gitt} alt="github"  /></a>
<a href='https://susanalab.github.io/learning-list/' >  <img className="web" src={web} alt="web"  /> </a>
  </div>
  
    </div>
  )
};