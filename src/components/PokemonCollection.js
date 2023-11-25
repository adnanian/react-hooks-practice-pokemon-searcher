import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemon} ) {
  const pokemonCards = pokemon.map((pokemonObject) => {
    return (
      <PokemonCard
        key={pokemonObject.id}
        name={pokemonObject.name}
        hp={pokemonObject.hp}
        front={pokemonObject.sprites.front}
        back={pokemonObject.sprites.back}
      />
    );
  });


  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
