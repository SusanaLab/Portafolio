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
      <section className='container'>
        <div class="card_Blue">
    <div class="card__header">
      <img className='iconos' src={card} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Rick and Morty </h4>

    </div>
  </div>
  <div class="card_Pink">
    <div class="card__header">
      <img className='iconos' src={poke} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Pokedex</h4>

    </div>
  </div>
    
  <div class="card_Blue">
    <div class="card__header">
      <img  className='iconos' src={memo} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Memmory Match</h4>
 
    </div>
  </div>

<div class="card_Pink">
    <div class="card__header">
      <img  className='iconos' src={red} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Social Network</h4>
     
    </div>
  </div>
  <div class="card_Blue">
    <div class="card__header">
      <img className='iconos' src={note} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>GreeNotes</h4>
   
    </div>
    
  </div>
  <div class="card_Pink">
    <div class="card__header">
      <img className='iconos' src={list} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Learning list </h4>
   
    </div>
    
  </div>

      </section>
  )
}
export default Projects