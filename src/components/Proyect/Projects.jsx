import React, { useState } from 'react'
import red from './share.png'
import memo from './games.png'
import note from './notas.png'
import card from './character.png'
import poke from './pokeball.png'
import list from './list.png'
import flecha from './flecha.png'
import { Link } from 'react-router-dom';
import './Proyect.css'





function Projects () {


  return (
    <div className='alto' id='proyect' >
  
    <p className='proyecto'>Proyects </p>
    <p className='see'>Let's see my projects!!</p>
      <section className='container_2'>

        <div class="card_Blue">
    <div class="card__header">
      <img className='conos' src={card} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Rick and Morty  </h4>
      <Link className='more' to="/rick-and-morty"><img className='flecha' src={flecha} alt="card__image" /></Link>
    </div>
  </div>

  <div class="card_Pink">
    <div class="card__header">
      <img className='conos' src={poke} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Pokedex</h4>
      <Link className='more' to="/pokedex"><img className='flecha' src={flecha} alt="card__image" /></Link>
    </div>
  </div>
    
  <div class="card_Blue">
    <div class="card__header">
      <img  className='conos' src={memo} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Memmory Match</h4>
      <Link className='more' to="/memmory-match"><img className='flecha' src={flecha} alt="card__image" /></Link>
    </div>
  </div>

<div class="card_Pink">
    <div class="card__header">
      <img  className='conos' src={red} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Social Network</h4>
      <Link className='more' to="/social-network"><img className='flecha' src={flecha} alt="card__image" /></Link>
    </div>
  </div>

  <div class="card_Blue">
    <div class="card__header">
      <img className='conos' src={note} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>GreeNotes</h4>
      <Link  className='more' to="/green-notes"><img className='flecha' src={flecha} alt="card__image" /></Link>
    </div>
  </div>

  <div class="card_Pink">
    <div class="card__header">
      <img className='conos' src={list} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Learning list </h4>
      <Link className='more' to="/learning-list"> <img className='flecha' src={flecha} alt="card__image" /></Link>
    </div>
  </div>

      </section></div>
  )
}
export default Projects