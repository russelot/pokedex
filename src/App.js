import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Pokemons from './components/Pokemons';
import PokemonDetails from './components/PokemonDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Pokemons />}/>
          <Route path="details/:name" element={<PokemonDetails />}/>
        </Routes>
      </div>
    );
  }
  
}

export default App;
