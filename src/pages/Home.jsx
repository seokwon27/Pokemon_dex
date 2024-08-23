import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  height: 3rem;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Landing>
      <img
        style={{
          height: "220px",
          marginBottom: "20px",
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVMZdfAnSkYIc_0hIzuFUVWhGP-tOwjjSxw&s"
      />
      <Button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </Button>
    </Landing>
  );
};

export default Home;
