import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  background-color: #aaa;
`;

const Dashboard = ({ selectedPokemon }) => {
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        selectedPokemon.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={true} />;
        })
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
