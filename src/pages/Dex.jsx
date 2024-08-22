import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const addPokemon = (pokemon) => {
    console.log("포켓몬 추가");
  };

  const removePokemon = (pokemon) => {
    console.log("포켓몬 삭제");
  };

  return (
    <>
      <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={removePokemon} />

      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </>
  );
};

export default Dex;
