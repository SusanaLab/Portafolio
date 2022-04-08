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
  <div className='contacto'>
<div className="con">
  <div className='Contact'>
  <h3 className='add'>Contact</h3>
  </div>
     <form className='formRegistro'>
     <h2 className ="text-login">Name </h2>
     <input  className ="input"   type="text" placeholder="Enter your name"/>
     <h2 className ="text-login" >Linkedin</h2>
     <input className ="input"  type="text" name="password" placeholder="Enter your user name"/>
     <h2 className ="text-login" >Email</h2>
     <input className ="input"  type="text" name="password" placeholder="Enter your e-mail adreess"/>
     <h2 className ="text-login" >Message</h2>
     <input className ="input"  type="text" name="password" placeholder="Typing your message here.."/>
     </form>  
      <button className="btn"  >Send</button>
</div></div>
  )
}
export default Contacto