import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TypeBox from "./TypeBox";
import { useContext } from "react";
import { AppContext } from "../App";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 147px;
  height: 215px;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 5px #888;
    transition: 200ms;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  height: 1.5rem;
  width: 4rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    border: 2px solid black;
    font-weight: 1000;
  }
`;

function PokemonCard({ pokemon, isSelected }) {
  const navigate = useNavigate();

  const { addPokemon, removePokemon } = useContext(AppContext);

  return (
    <Card>
      <div
        onClick={() => {
          navigate(`/detail?id=${pokemon.id}`);
        }}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p
          style={{
            color: "#aaa",
            fontSize: "12px",
            textAlign: "left",
            marginBottom: "10px",
          }}
        >{`No. ${pokemon.id}`}</p>
        <p
          style={{
            textAlign: "left",
            fontWeight: "700",
          }}
        >
          {pokemon.korean_name}
        </p>
        <TypeBox pokemon={pokemon} isDetail={false} />
      </div>
      {/* 추가 삭제버튼 */}
      {isSelected ? (
        <Button
          onClick={() => {
            removePokemon(pokemon);
          }}
          color="#FF0000"
        >
          보내기
        </Button>
      ) : (
        <Button
          onClick={() => {
            addPokemon(pokemon);
          }}
          color="#008000"
        >
          포획
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
