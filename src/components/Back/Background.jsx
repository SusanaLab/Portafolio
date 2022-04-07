import React from 'react'
import ipn from './education.png'
import labo from './coding.png'
import './Back.css'
function Background () {
  return (
<div className='back'>
<div className='two'>
       <img className='top' src={ipn} alt="facebook" class="imgSocialNetwork" /> 
       <div className='text'>
          <h4 className='PAR'>Frontend 2021</h4>
          <ul>
          <p>Participar en los distintos escenarios de ideación, prototipado y desarrollo de un sitio web usando HTML, CSS y JavaScript.</p>
          <p>Adaptar el diseño de una web a diversos dispositivos y navegadores.</p>
          <p>Hacer uso de herramientas de prototipado y metodologías ágiles para buscar la mejora constante en la experiencia del usuario.</p>
          </ul>
      </div>
</div> 
<div className='two'> 
       <img className='carrera' src={labo} alt="facebook" class="imgSocialNetwork" />  
        <div className='text'>  
              <h4 className='PAR'>Licenciatura en Relaciones Comerciales , 2013-2017</h4>
              <p> Formacion profesional donde adquiri conocimientos de areas como publicidad, mercadotecnia, ventas, administracion entre otras, para lograr desarrollar productos y servicios exitosos.</p>
        </div>
</div>
     </div>
  )
}
export default Background