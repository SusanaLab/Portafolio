import React from 'react'
import './About.css';
import csss from './es.png'
import html from './html.png'
import js from './js.png'
import reac from './react.png'
import sass from './sass.png'
import trello from './trelloo.png'
import figma from './figma.png'
import git from './git.png'
import github from './github.png'

function About () {
  return (
    <div id="about" className='fondo'>
    <h3 className='parr'>About me</h3>
    <p className='sobre'>I am a Frontend developer focused on creating unique experiences between users and the web, through the planning, design and programming of software solutions, using technologies such as Javascript and React that add value to the client.</p>
    <div id='about2'>
 <img className="SocialNetwork" src={trello} alt="trello"  />  
 <img className="SocialNetwork" src={figma} alt="figma"  />   
 <img className="SocialNetwork" src={git} alt="git"  />
 <img className="SocialNetwork" src={github} alt="github"  />  
<img className="SocialNetwork" src={csss} alt="ss"  />  
 <img className="SocialNetwork" src={html} alt="html"  />   
 <img className="SocialNetwork" src={js} alt="js"  />
 <img className="SocialNetwork" src={reac} alt="react"  />  
 <img className="SocialNetwork" src={sass} alt="sass"  /> 

     </div>
      </div>
  )
}
export default About



