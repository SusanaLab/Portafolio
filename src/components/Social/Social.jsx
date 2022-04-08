import React from 'react'
import './Social.css'
import mail from './email.png'
import linkedin  from './linkedin.png'
import github from './github.png'
import instagram from './instagram.png'
import twitter  from './twitter.png'

function Social () {
  return (
    <div id='about'>
 
  <img className="SocialNetwork" src={linkedin} alt="linkedin"  />  
  <img className="SocialNetwork" src={github} alt="github"  />   
  <img className="SocialNetwork" src={mail} alt="email"  />
  <img className="SocialNetwork" src={instagram} alt="instagram"  />  
  <img className="SocialNetwork" src={twitter} alt="twitter"  />  
      </div>
  )
}
export default Social
