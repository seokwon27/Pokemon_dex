import styled from "styled-components";

const StBox = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  margin: 5px;
  width: ${(props) => (props.$isDetail ? "200px" : "42%")};
  height: ${(props) => (props.$isDetail ? "2rem" : "1.8em")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.$isDetail ? "16px" : "14px")};
`;

const TypeArea = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: center;
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

const TypeBox = ({ pokemon, isDetail }) => {
  return (
    <TypeArea>
      {pokemon.types.map((type) => {
        return (
          <StBox key={pokemon.id + type} color={typeColor(type)} $isDetail={isDetail}>
            {type}
          </StBox>
        );
      })}
    </TypeArea>
  );
};

export default TypeBox;
