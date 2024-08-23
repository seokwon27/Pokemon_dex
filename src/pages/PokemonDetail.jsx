import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";
import TypeBox from "../components/TypeBox";

const StDetail = styled.div`
  background-color: bisque;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 500px;
`;
const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`;

const PokemonDetail = () => {
  //쿼리 스트링 포켓몬id 가져오기
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemonId = +searchParams.get("id");
  const pokemon = MOCK_DATA.find((el) => el.id === pokemonId);

  //nav
  const navigate = useNavigate();

  return (
    <StDetail>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonInfo>
        <p
          style={{
            color: "#aaa",
            fontSize: "12px",
            textAlign: "left",
            marginBottom: "10px",
          }}
        >{`No. ${pokemon.id}`}</p>
        <h2
          style={{
            textAlign: "left",
            fontSize: "30px",
            fontWeight: "800",
          }}
        >
          {pokemon.korean_name}
        </h2>
        <p
          style={{
            margin: "30px 0",
          }}
        >
          {pokemon.description}
        </p>
        <TypeBox pokemon={pokemon} />

        <button
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로 가기
        </button>
      </PokemonInfo>
    </StDetail>
  );
};

export default PokemonDetail;
