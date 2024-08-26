import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";
import TypeBox from "../components/TypeBox";

const StDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
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
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  height: 1.8rem;
  &:hover {
    cursor: pointer;
    border: 2px solid black;
    font-weight: 1000;
  }
`;

const PokemonDetail = () => {
  //쿼리 스트링 포켓몬id 가져오기
  const [searchParams] = useSearchParams();
  const pokemonId = +searchParams.get("id");
  const pokemon = MOCK_DATA.find((el) => el.id === pokemonId);

  //nav
  const navigate = useNavigate();

  return (
    // const {addPokemon} = useContext(DexCount)
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0",
      }}
    >
      <StDetail>
        <img
          style={{
            width: "300px",
            height: "300px",
          }}
          src={pokemon.img_url}
          alt={pokemon.korean_name}
        />
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
            <StBtn color="#008000">추가하기</StBtn>
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
      </StDetail>
    </div>
  );
};

export default PokemonDetail;
