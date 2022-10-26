import React from "react";
import Logo from '../../assets/logo.png';
import WhiteIcon from '../../assets/sun.png';
import DarkIcon from '../../assets/moon.png';
import './style.css';

export default function Topo(props) {
  return(
    <header className={props.darkMode ? "trabDark" : "trabWhite"}>
      <img className="logo" src={Logo}/>
      <button onClick={props.AlterarTema} className={props.darkMode ? "darkbtn" : "btn"}>
        <img className="botao" src={props.darkMode ? WhiteIcon : DarkIcon}/>
        </button>
    </header>
  );
}