import { useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import PokeDex from "../components/PokeDex";

const PokemonDetail = () => {
  //쿼리 스트링 포켓몬id 가져오기
  const [searchParams] = useSearchParams();
  const pokemonId = +searchParams.get("id");
  const pokemon = MOCK_DATA.find((el) => el.id === pokemonId);

  return (
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
      <PokeDex pokemon={pokemon} />
    </div>
  );
};

export default PokemonDetail;
