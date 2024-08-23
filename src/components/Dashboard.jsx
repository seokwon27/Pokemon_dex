import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

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

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  return (
    <DashboardContainer>
      <h2
        style={{
          color: "red",
          fontSize: "25px",
          margin: "20px 0",
          fontWeight: "bold",
        }}
      >
        나만의 포켓몬
      </h2>

      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ListContainer>
          {selectedPokemon.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onRemove={() => {
                  onRemovePokemon(pokemon);
                }}
                isSelected={true}
              />
            );
          })}
        </ListContainer>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
