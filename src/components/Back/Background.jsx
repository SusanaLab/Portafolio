import React from 'react'
import ipn from './education.png'
import labo from './coding.png'
import './Back.css'
function Background () {
  return (
<div className='back' id='back'>

     
<div className='two'>  
<img className="SocialNetwork" src={ipn} alt="facebook"  /> 
       <div className='text'>
          <h4 className='PAR'>Frontend 2021,  <a href='https://www.laboratoria.la/' >Laboratoria</a> Mex011 </h4>
          <ul>
          <p className='letra' >Participar en los distintos escenarios de ideación, prototipado y desarrollo de un sitio web usando HTML, CSS y JavaScript.</p>
          <p className='letra' >Adaptar el diseño de una web a diversos dispositivos y navegadores.</p>
          <p className='letra' >Hacer uso de herramientas de prototipado y metodologías ágiles para buscar la mejora constante en la experiencia del usuario.</p>
          </ul>
      </div>
</div> 
<div className='two'> 
       <img className="SocialNetwork" src={labo} alt="facebook"  />  
        <div className='text'>  
              <h4 className='PAR'>Licenciatura en  <a href='https://www.ipn.mx/oferta-educativa/educacion-superior/ver-carrera.html?lg=es&id=56&nombre=Licenciatura-en-Relaciones-Comerciales' >Relaciones Comerciales</a> en IPN , 2013-2017</h4>
              <p className='letra'> Formacion profesional donde adquiri conocimientos de areas como publicidad, mercadotecnia, ventas, administracion entre otras, para lograr desarrollar productos y servicios exitosos.</p>
        </div>
</div>
     </div>
  )
}
export default Background