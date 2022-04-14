import React from 'react'
import './Social.css'
import mail from './email.png'
import linkedin  from './linkedin.png'
import github from './github.png'
import instagram from './instagram.png'
import twitter  from './twitter.png'

function Social () {
  



  return (
    <div id='social'>
 
 <a href='https://www.linkedin.com/in/susana-garcia-rodr%C3%ADguez-678342145' > <img  src={linkedin} className="SocialNetwork"  alt="linkedin"  />  </a>
 <a href='https://github.com/SusanaLab/' > <img className="SocialNetwork" src={github} alt="github"  />    </a>
 <a href='mailto:susanlevart@gmail.com?subject= Hola Susana' >  <img className="SocialNetwork" src={mail} alt="email"  /> </a>
 <a href='https://www.linkedin.com/' >   <img className="SocialNetwork" src={instagram} alt="instagram"  />  </a> 
 <a href='https://twitter.com/develovergirl' > <img className="SocialNetwork" src={twitter} alt="twitter"  />  </a> 
      </div>
  )
}
export default Social
