import React from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList.js";
import "../stylesheet/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pokeData: pokemons };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mi lista de Pokemon</h1>
          <PokeList pokeData={this.state.pokeData} />
        </header>
      </div>
    );
  }
}

export default App;
