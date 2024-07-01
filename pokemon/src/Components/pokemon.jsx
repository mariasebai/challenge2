import React from 'react';

const Pokemon = ({ name, types, image }) => {
  return (
    <div className="pokemon">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Types: {types.join(", ")}</p>
    </div>
  );
};

export default Pokemon;