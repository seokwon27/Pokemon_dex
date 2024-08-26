import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../mock";

const ListContainer = styled.div`
  background-color: #bbb;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  overflow: hidden;
`;

const PokemonList = () => {
  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={false} />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
