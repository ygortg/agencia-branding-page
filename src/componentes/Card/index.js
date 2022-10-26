import React from "react";
import './style.css';

export default function Card(props) {
  return(
    <div id="card" className={props.darkMode ? "darkCard" : "whiteCard"}>
      <p>{props.data}</p>
      <h4>{props.titulo}</h4>
      <span>{props.empresa}</span>
      <p>{props.paragrafo}</p>
    </div>
  );
}