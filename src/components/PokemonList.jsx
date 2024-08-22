import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  background-color: #bbb;
  display: flex;
  flex-flow: row wrap;
`;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => {
            onAddPokemon(pokemon);
          }}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
