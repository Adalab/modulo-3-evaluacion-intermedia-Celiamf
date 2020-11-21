import React from "react";
import Pokemon from "./Pokemon.js";
import "../stylesheet/PokeList.scss";
import PropTypes from "prop-types";

class PokeList extends React.Component {
  render() {
    const pokeCards = this.props.pokeData.map((eachPokemon) => {
      return (
        <Pokemon
          id={eachPokemon.id}
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

PokeList.propTypes = {
  pokeData: PropTypes.array.isRequired,
};

export default PokeList;
