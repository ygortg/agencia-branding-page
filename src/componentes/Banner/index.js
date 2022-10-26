import React from "react";
import './style.css';

export default function Banner(props) {
  return(
    <section id="sectionBanner" className={props.darkMode ? "darkBanner" : "whiteBanner"}>
      <div className="banner">
      </div>
      <div className="texto-banner">
        <p>BRANDING/UI/UX/TECNOLOGIA</p>
        <h2>Agencia de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}