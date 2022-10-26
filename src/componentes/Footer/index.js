import React from "react";
import Logo from '../../assets/logo.png';
import iconeFacebook from '../../assets/facebook.png';
import iconeTwitter from '../../assets/twitter.png';
import iconeLinkedin from '../../assets/linkedin.png';
import iconeDribble from '../../assets/dribble.png';
import iconeBehance from '../../assets/behance.png';
import iconeGooglePlus from '../../assets/google-plus.png';
import './style.css';

export default function Footer(props){
  return(
    <footer className={props.darkMode ? "darkFooter" : "whiteFooter"}>
      <img className="logoRodape" src={Logo} alt="logo"/>
      <p>
        Ajudamos a criar uma personalidade digital construindo a sua marca num ambiente online, utilizando estratégias, ferramentas e tecnologias personalizadas.
      </p>
      <div className="redes">
        <img src={iconeFacebook}/>
        <img src={iconeTwitter}/>
        <img src={iconeLinkedin}/>
        <img src={iconeDribble}/>
        <img src={iconeBehance}/>
        <img src={iconeGooglePlus}/>
      </div>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>nome do desenvolvedor</span></p>
      </div>
    </footer>
  );
}