import React from "react";
import Pokemon from "./Pokemon.js";
import "../stylesheet/PokeList.scss";

class PokeList extends React.Component {
  render() {
    const pokeCards = this.props.pokemons.map((pokemon) => {
      return (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          img={pokemon.url}
          types={pokemon.types}
        />
      );
    });

    return (
      <>
        <ul className="cardList">{pokeCards}</ul>
      </>
    );
  }
}

export default PokeList;
