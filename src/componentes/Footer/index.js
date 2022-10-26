import React from "react";
import './style.css';

export default function Footer(props){
  return(
    <footer className={props.darkMode ? "darkFooter" : "whiteFooter"}>
      <img className="logoRodape" src="assets/logo.png" alt="logo"/>
      <p>
        Ajudamos a criar uma personalidade digital construindo a sua marca num ambiente online, utilizando estratégias, ferramentas e tecnologias personalizadas.
      </p>
      <div className="redes">
        <img src="assets/facebook.png"/>
        <img src="assets/twitter.png"/>
        <img src="assets/linkedin.png"/>
        <img src="assets/dribble.png"/>
        <img src="assets/behance.png"/>
        <img src="assets/google-plus.png"/>
      </div>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>nome do desenvolvedor</span></p>
      </div>
    </footer>
  );
}