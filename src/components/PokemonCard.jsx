import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 88%;
`;

const Button = styled.button``;

const TypeBox = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  margin: 5px;
  width: 42%;
  height: 1.3rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const typeColor = (type) => {
  switch (type) {
    case "풀":
      return "#42bf24";
    case "격투":
      return "#ffa202";
    case "비행":
      return "#95c9ff";
    case "독":
      return "#994dcf";
    case "땅":
      return "#ab7939";
    case "바위":
      return "#bcb889";
    case "벌레":
      return "#9fa424";
    case "고스트":
      return "#6e4570";
    case "강철":
      return "#6aaed3";
    case "불꽃":
      return "#ff612c";
    case "물":
      return "#2992ff";
    case "풀":
      return "#42bf24";
    case "전기":
      return "#ffdb00";
    case "에스퍼":
      return "#ff637f";
    case "얼음":
      return "#42d8ff";
    case "드래곤":
      return "#5462d6";
    case "페어리":
      return "#ffb1ff";

    default:
      return "#aaa";
  }
};

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <Card>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>{pokemon.korean_name}</p>
      <div
        style={{
          margin: "10px 0 10px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pokemon.types.map((type) => {
          return (
            <TypeBox key={pokemon.id + type} color={typeColor(type)}>
              <p>{type}</p>
            </TypeBox>
          );
        })}
      </div>
      {isSelected ? (
        <Button onClick={() => {}}>삭제</Button>
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
