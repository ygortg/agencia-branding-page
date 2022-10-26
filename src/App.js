import React, {useState} from 'react';
import './App.css';
import Topo from './componentes/Header';
import Banner from './componentes/Banner';
import ExperienciaTrabalho from './componentes/ExperienciaTrabalho';
import Footer from './componentes/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const AlterarTema = () =>{
    setDarkMode(!darkMode)
  }


  return (
    <main>
      <Topo AlterarTema={AlterarTema} darkMode={darkMode}/>
      <Banner darkMode={darkMode}/>
      <ExperienciaTrabalho darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </main>
  );
}

export default App;
