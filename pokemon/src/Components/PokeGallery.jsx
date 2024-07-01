import React from 'react';
import Pokemon from './pokemon'
import pokemonData from './pokemonData';

const PokeGallery = () => {
  return (
    <div className="pokegallery">
      {pokemonData.map((pokemon, index) => (
        <Pokemon
          key={index}
          name={pokemon.name}
          types={pokemon.types}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};

export default PokeGallery;