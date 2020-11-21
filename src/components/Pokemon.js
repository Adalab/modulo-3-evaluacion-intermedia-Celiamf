import React from "react";
import "../stylesheet/Pokemon.scss";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    console.log(this.props.id);
    const pokeTypes = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });

    return (
      <li key={this.props.id} className="card">
        <img src={this.props.img} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <ul className="types">{pokeTypes}</ul>
      </li>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;
