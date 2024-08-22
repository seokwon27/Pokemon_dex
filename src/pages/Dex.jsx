import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }
    selectedPokemon.some((el) => el.id === pokemon.id)
      ? alert("이미 추가된 포켓몬입니다.")
      : setSelectedPokemon([...selectedPokemon, pokemon]) || alert("추가 완료");
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
