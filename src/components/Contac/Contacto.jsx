import React from 'react'
import './contact.css'

function Contacto () {

  return (
  <div className='contacto' id='contac'>
<div className="con">
  <div className='Contact'>
  <h3 className='add'>Contact</h3>
  </div>
     <form className='formRegistro' action="https://formsubmit.co/susanlevart@gmail.com" method ="POST">
     <h2 className ="text-login">Name </h2>
     <input  className ="input"  name="name" type="text" placeholder="Enter your name"/>
     <h2 className ="text-login" >Linkedin</h2>
     <input className ="input" name="link" type="link"  placeholder="Enter your user name"/>
     <h2 className ="text-login" >Email</h2>
     <input className ="input" name="email" type="email" placeholder="Enter your e-mail adreess"/>
     <h2 className ="text-login" >Message</h2>
     <input className ="input"  type="text" name="text" placeholder="Typing your message here.."/>
     <button  type="submit" className="btn"  >Send</button>
     </form>  
      
</div></div>
  )
}
export default Contacto