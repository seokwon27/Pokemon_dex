import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TypeBox from "./TypeBox";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 88%;
  cursor: pointer;
`;

const Button = styled.button``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const navigate = useNavigate();

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
        <TypeBox pokemon={pokemon} />
      </div>
      {/* 추가 삭제버튼 */}
      {isSelected ? (
        <Button
          onClick={() => {
            onRemove();
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
            onAdd();
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
