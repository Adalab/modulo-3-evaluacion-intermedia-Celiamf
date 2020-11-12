import React from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList.js";
import "../stylesheet/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi lista de Pokemon</h1>
        <PokeList pokemons={pokemons} />
      </header>
    </div>
  );
}

export default App;
