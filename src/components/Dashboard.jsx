import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { AppContext } from "../App";
import Swal from "sweetalert2";

const DashboardContainer = styled.div`
  background-color: #bbb;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  justify-content: center;
`;

const ListContainer = styled.div`
  background-color: #bbb;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #ccc;
  gap: 20px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

const InitBtn = styled.button`
  background-color: #ff2727;
  width: 200px;
  height: 30px;
  color: white;
  border: none;
  border-radius: 5px;
`;

//빈배열 이미지
const DefaultImg = () => {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        border: "2px dashed #777",
        borderRadius: "10px",
      }}
    >
      <img
        src={
          "https://i.namu.wiki/i/x7KrsctDuACm2dLbaM0X2Uag7BoL9sf9DLVauPztdApPBPn5yL1rMm8fSOBuREhK9lAKskl7oJ177UuValUIcg.webp"
        }
        style={{ position: "relative", width: "100%" }}
      />
    </div>
  );
};

const Dashboard = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(AppContext);

  //모두 보내기 버튼
  const initPokemon = () => {
    if (selectedPokemon.length === 0) {
      return Swal.fire({
        icon: "error",
        title: "소유한 포켓몬이 없습니다.",
        text: "포켓몬 포획을 먼저 하세요!",
      });
    }
    Swal.fire({
      title: "포켓몬을 모두 보내시겠습니까??",
      text: "모든 포켓몬이 야생으로 돌아갑니다.",
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
          text: " 포켓몬이 야생으로 돌아갔습니다...",
          icon: "success",
          confirmButtonText: "확인",
        });
        return setSelectedPokemon([]);
      }
    });
  };

  const displayedPokemon = Array(6).fill(null);
  return (
    <DashboardContainer>
      <h2
        style={{
          color: "red",
          fontSize: "25px",
          margin: "20px 0",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        나만의 포켓몬
      </h2>

      {
        <ListContainer>
          {displayedPokemon
            .map((_, index) => selectedPokemon[index] || displayedPokemon[index])
            .map((pokemon, index) => {
              return pokemon ? (
                <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={true} />
              ) : (
                <DefaultImg key={"default" + index} />
              );
            })}
        </ListContainer>
      }
      <InitBtn onClick={initPokemon}>모두 보내기</InitBtn>
    </DashboardContainer>
  );
};

export default Dashboard;
