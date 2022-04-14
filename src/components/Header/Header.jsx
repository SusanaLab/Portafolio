import React from 'react'
import './header.css';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

function Header ()  {

  return (
    <nav >
      <ul className='div_nav'>
        <li ><a href="/#about"><span> About </span></a></li>
        <li ><a href="/#proyect">Work</a></li>
        <li ><a href="/#back">Background</a></li>
        <li ><a href="/#contac">Contact</a></li>
        <li ><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>

  )
}export default Header
/*   <nav className='div_nav'>
     
  <li className='listas' href="#About"> 
  <span>About</span>
  </li>

  <li href="#proyects">
    <span>Work</span>
</li>

<li href="#back">
    <span > Background</span>
</li>

  <li href="#contact">
    <span>Contact</span>
</li>

  <li href="#blog"> 
  <span> Blog </span>
  </li>
   
</nav>

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.scss';

function Navbar() {
 
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li ><a href="/#home">Sobre Nosotros</a></li>
        <li ><a href="/#about">Información</a></li>
        <li ><a href="/#menu">La Carta</a></li>
        <li ><a href="/#awards">Reconocimientos</a></li>
        <li ><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/#home" onClick={() => setToggleMenu(false)}>Sobre Nosotros</a></li>
              <li><a href="/#about" onClick={() => setToggleMenu(false)}>Información</a></li>
              <li><a href="/#menu" onClick={() => setToggleMenu(false)}>La Carta</a></li>
              <li><a href="/#awards" onClick={() => setToggleMenu(false)}>Reconocimientos</a></li>
              <li><Link to="/login" onClick={() => setToggleMenu(false)}>Iniciar Sesión</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; */
