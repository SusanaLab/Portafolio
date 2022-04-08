import React from 'react'
import './header.css'
function Header ()  {
  return (
    <nav className='div_nav'>
     
  <li className='listas' href="#About"> 
  <span>About</span>
  </li>
  <li href="#proyects">
    <span>Work</span>
</li>
  <li href="#back">
    <span>Background</span>
</li>
  <li href="#contact">
    <span>Contact</span>
</li>
  <li href="#blog"> 
  <span> Blog </span>
  </li>
    <a name="About"></a>
</nav>

  )
}
export default Header
