import React from "react";
import Card from "../Card";
import './style.css';

export default function ExperienciaTrabalho(props) {
  return(
    <section id="sectionTrab" className={props.darkMode ? "trabDark" : "trabWhite"}>
      <div id="experiencia" className={props.darkMode ? "textoDark" : "textoWhite"}>
        <h3>Experiências De Trabalho</h3>
        <p>
          Ha mais de dez anos no mercado de Brending e Design Gráfico de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
        </p>
          
      </div>
        
      <div className="cards wrap">

        <Card
        data="Junho 2012 - 2016"
        titulo="Web designer"
        empresa="Pled Piper startUp"
        paragrafo="Criação de Landing Pages, sites institucionais e e-commerces completamente customizados e otimizado para buscadores."/>

        <Card
        data="Junho 2012 - 2019"
        titulo="Product Designer"
        empresa="E Corp"
        paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra."/>

        <Card
        data="Junho 2019 - 2022"
        titulo="Digital Consulting"
        empresa="Arasaka Inc."
        paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto desde a definição inicial a sua execução."/>
      </div>
    </section>
  );
}