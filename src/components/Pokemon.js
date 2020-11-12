import React from "react";
import "../stylesheet/Pokemon.scss";

class Pokemon extends React.Component {
  render() {
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

export default Pokemon;
