import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import Swal from "sweetalert2";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //추가
  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      Swal.fire({
        icon: "error",
        title: "추가 불가",
        text: "최대 6개의 포켓몬만 선택 가능합니다!",
      });
      return;
    }
    selectedPokemon.some((el) => el.id === pokemon.id)
      ? alert("이미 추가된 포켓몬입니다.")
      : setSelectedPokemon([...selectedPokemon, pokemon]) || alert("추가 완료");
  };

  //삭제
  const removePokemon = (pokemon) => {
    Swal.fire({
      title: "포켓몬을 보내시겠습니까?",
      text: "시작 후 취소할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예, 보내겠습니다.",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "포켓몬을 보냈습니다!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setSelectedPokemon(selectedPokemon.filter((el) => el.id !== pokemon.id));
      }
    });
  };

  return (
    <>
      <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={removePokemon} />

      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </>
  );
};

export default Dex;
