import styled from "styled-components";
import TypeBox from "./TypeBox";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 830px;
  height: 500px;
  /* background: ${(props) => props.background}; */
  border: 1px ${(props) => props.background} solid;
  border-radius: 30px;
`;

const DetailImg = styled.div``;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  margin: 20px 0 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StBtn = styled.button`
  width: 30%;
  margin-top: auto;
  background: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  height: 1.8rem;
  &:hover {
    cursor: pointer;
    border: 2px se black;
    font-weight: 1000;
  }
`;

const typeColor = (type) => {
  switch (type) {
    case "노말":
      return "#999999";
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
      return "black";
  }
};

const PokeDex = ({ pokemon }) => {
  const navigate = useNavigate();
  const { addPokemon } = useContext(AppContext);

  return (
    <DetailBox background={typeColor(pokemon.types[0])}>
      <DetailImg>
        <img
          style={{
            width: "300px",
            height: "300px",
          }}
          src={pokemon.img_url}
          alt={pokemon.korean_name}
        />
      </DetailImg>
      <PokemonInfo>
        <p
          style={{
            color: "#999",
            fontSize: "18px",
            textAlign: "left",
            marginBottom: "10px",
          }}
        >{`No. ${pokemon.id}`}</p>
        <h2
          style={{
            textAlign: "left",
            fontSize: "30px",
            fontWeight: "800",
            margin: "20px",
          }}
        >
          {pokemon.korean_name}
        </h2>
        <p
          style={{
            margin: "20px 20px 50px 20px",
          }}
        >
          {pokemon.description}
        </p>
        <p
          style={{
            color: "#999",
            fontSize: "18px",
            textAlign: "left",
            marginBottom: "30px",
          }}
        >
          타입
        </p>
        <TypeBox pokemon={pokemon} isDetail={true} />
        <BtnWrapper>
          <StBtn
            onClick={() => {
              addPokemon(pokemon);
            }}
            color="#008000"
          >
            포획하기
          </StBtn>
          <StBtn
            onClick={() => {
              navigate("/dex");
            }}
            color="red"
          >
            뒤로가기
          </StBtn>
        </BtnWrapper>
      </PokemonInfo>
    </DetailBox>
  );
};

export default PokeDex;
