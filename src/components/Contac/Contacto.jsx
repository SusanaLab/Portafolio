import React from 'react'
import './contact.css'
import github from '../Contac/Assets/github.png'
import linkedin from '../Contac/Assets/linkedin.png'
import gmail from '../Contac/Assets/correo.png'
function Contacto () {
  const handleClick = e =>  {
    e.preventDefault();

  
  }; 
  return (
<div class="con">
  <h3 className='add'>Contactame</h3>
  <div class="icono">
  <img src={github} alt="facebook" class="imgSocialNetwork" />  
  <img src={linkedin} alt="facebook" class="imgSocialNetwork" /> 
  <img onChange={handleClick} src={gmail} alt="facebook" class="imgSocialNetwork" /> 
 
  </div>
</div>
  )
}
export default Contacto