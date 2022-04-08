import React from 'react'
import red from './share.png'
import memo from './games.png'
import note from './notas.png'
import card from './character.png'
import poke from './pokeball.png'
import list from './list.png'
import './Proyect.css'

function Projects () {
  return (
    <div className='all' >
       <a name="proyects"></a>
    <p className='proyecto'>Proyects </p>
    <p className='see'>Let's see my projects!!</p>
      <section className='container'>
        <div class="card_Blue">
    <div class="card__header">
      <img className='conos' src={card} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Rick and Morty </h4>

    </div>
  </div>
  <div class="card_Pink">
    <div class="card__header">
      <img className='conos' src={poke} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Pokedex</h4>

    </div>
  </div>
    
  <div class="card_Blue">
    <div class="card__header">
      <img  className='conos' src={memo} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Memmory Match</h4>
 
    </div>
  </div>

<div class="card_Pink">
    <div class="card__header">
      <img  className='conos' src={red} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Social Network</h4>
     
    </div>
  </div>
  <div class="card_Blue">
    <div class="card__header">
      <img className='conos' src={note} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>GreeNotes</h4>
   
    </div>
    
  </div>
  <div class="card_Pink">
    <div class="card__header">
      <img className='conos' src={list} alt="card__image" />
    </div>
    <div class="card__body">
      <h4>Learning list </h4>
   
    </div>
    
  </div>

      </section></div>
  )
}
export default Projects