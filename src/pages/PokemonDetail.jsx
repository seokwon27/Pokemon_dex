import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const StDetail = styled.div`
  background-color: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
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
      <div>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h2>{pokemon.korean_name}</h2>
        <p>타입: {pokemon.types.join(", ")}</p>
        <button
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로 가기
        </button>
      </div>
    </StDetail>
  );
};

export default PokemonDetail;
