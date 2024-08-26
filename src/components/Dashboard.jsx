import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { DexContext } from "../App";

const DashboardContainer = styled.div`
  background-color: #bbb;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const ListContainer = styled.div`
  background-color: #bbb;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  background-color: #ccc;
  gap: 20px;
  border-radius: 10px;
  padding: 20px;
`;

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
  const { selectedPokemon } = useContext(DexContext);

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
    </DashboardContainer>
  );
};

export default Dashboard;
