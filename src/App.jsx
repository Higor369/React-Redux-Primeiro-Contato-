import React from 'react';
import logo from './logo.svg';
import './App.css';

import Intervalo from '../src/componentes/intervalo'
import Media from './componentes/media';
import Soma from './componentes/soma';
import Sorteio from './componentes/sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
