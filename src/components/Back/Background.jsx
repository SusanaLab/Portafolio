import React from 'react'
import ipn from './education.png'
import labo from './coding.png'
import './Back.css'
function Background () {
  return (
    <div className='back'>
      <div className='div-izquierda'>
        <h3>Estudios </h3>
      </div>

      <div className='div-derecha'>

     <div className='single'>
       <div className='icon'><img src={ipn} alt="facebook" class="imgSocialNetwork" />  </div>
     
     <div className='text'><h4>Frontend 2021</h4>
    <ul>
      <li>Participar en los distintos escenarios de ideación, prototipado y desarrollo de un sitio web usando HTML, CSS y JavaScript.</li>
      <li>Adaptar el diseño de una web a diversos dispositivos y navegadores.</li>
      <li>Hacer uso de herramientas de prototipado y metodologías ágiles para buscar la mejora constante en la experiencia del usuario.</li>
      </ul></div>
    
     </div>

     <div className='single'>
       <div className='icon'> <img src={labo} alt="facebook" class="imgSocialNetwork" />  </div>
    <div className='text'> <h4>Licenciatura en Relaciones Comerciales , 2013-2017</h4>
     <p> Formacion profesional donde adquiri conocimientos de areas como publicidad, mercadotecnia, ventas, administracion entre otras, para lograr desarrollar productos y servicios exitosos.</p></div>
    
    </div>
    </div>

     </div>
  )
}
export default Background