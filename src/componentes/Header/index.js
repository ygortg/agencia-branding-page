import React from "react";
import './style.css';

export default function Topo(props) {
  return(
    <header className={props.darkMode ? "trabDark" : "trabWhite"}>
      <img className="logo" src="assets/logo.png"/>
      <button onClick={props.AlterarTema} className={props.darkMode ? "darkbtn" : "btn"}>
        <img className="botao" src={props.darkMode ? "assets/sun.png" : "assets/moon.png"}/>
        </button>
    </header>
  );
}