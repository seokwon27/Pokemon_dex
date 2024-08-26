import { createContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import Swal from "sweetalert2";

export const DexContext = createContext();

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //추가
  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      Swal.fire({
        icon: "error",
        title: "소지 한도 초과!",
        text: "최대 6개의 포켓몬만 선택 가능합니다!",
      });
      return;
    }
    selectedPokemon.some((el) => el.id === pokemon.id)
      ? Swal.fire({
          icon: "error",
          title: "이미 추가된 포켓몬입니다!",
          text: "나만의 포켓몬을 확인해주세요",
        })
      : setSelectedPokemon([...selectedPokemon, pokemon]) ||
        Swal.fire({
          title: "성공!",
          text: `나만의 포켓몬에 "${pokemon.korean_name}" 추가`,
          imageUrl: `${pokemon.img_url}`,
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: `${pokemon.korean_name}`,
        });
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
          text: " 포켓몬이 잔혹한 야생으로 돌아갔습니다...",
          icon: "success",
        });
        setSelectedPokemon(selectedPokemon.filter((el) => el.id !== pokemon.id));
      }
    });
  };

  return (
    <DexContext.Provider
      value={{
        addPokemon: addPokemon,
        removePokemon: removePokemon,
        selectedPokemon: selectedPokemon,
        setSelectedPokemon: setSelectedPokemon,
      }}
    >
      <Dashboard />

      <PokemonList pokemonList={MOCK_DATA} />
    </DexContext.Provider>
  );
};

export default Dex;
