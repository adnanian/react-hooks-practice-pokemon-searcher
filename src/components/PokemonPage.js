import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemon(data));
    }, []);

  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState("");

  const pokemonToDisplay = pokemon.filter((pokemonObject) => {
   if (searchText === "") return true;
   return pokemonObject.name.toLowerCase().includes(searchText.toLowerCase());
  });

  function updateSearchText(input) {
    setSearchText(input);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchText={searchText} onFilter={updateSearchText}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
