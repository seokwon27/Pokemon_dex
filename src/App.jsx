import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Reset.css";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";
import TypeBox from "./components/TypeBox";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<PokemonDetail />} />
          <Route path="/typebox" element={<TypeBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
