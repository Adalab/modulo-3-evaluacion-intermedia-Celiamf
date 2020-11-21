import React from "react";
import Pokemon from "./Pokemon.js";
import "../stylesheet/PokeList.scss";

class PokeList extends React.Component {
  render() {
    const pokeCards = this.props.pokeData.map((eachPokemon) => {
      return (
        <Pokemon
          key={eachPokemon.id}
          name={eachPokemon.name}
          img={eachPokemon.url}
          types={eachPokemon.types}
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
