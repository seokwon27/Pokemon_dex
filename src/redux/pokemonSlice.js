import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = [];

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.length >= 6) {
        Swal.fire({
          icon: "error",
          title: "소지 한도 초과!",
          text: "최대 6개의 포켓몬만 선택 가능합니다!",
          confirmButtonText: "확인",
        });
        return;
      } else if (state.some((el) => el.id === action.payload.id)) {
        Swal.fire({
          icon: "error",
          title: "이미 추가된 포켓몬입니다!",
          text: "나만의 포켓몬을 확인해주세요",
          confirmButtonText: "확인",
        });
        return;
      } else {
        Swal.fire({
          title: "성공!",
          text: `나만의 포켓몬에 "${action.payload.korean_name}" 추가`,
          imageUrl: `${action.payload.img_url}`,
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: `${action.payload.korean_name}`,
          confirmButtonText: "확인",
        });
        state.push(action.payload);
      }
    },

    removePokemon: (state, action) => {
      {
        Swal.fire({
          title: "포켓몬을 보냈습니다!",
          text: " 포켓몬이 야생으로 돌아갔습니다...",
          icon: "success",
          confirmButtonText: "확인",
        });
        return state.filter((el) => el.id !== action.payload.id);
      }
    },

    initPokemon: (state) => {
      if (state.length === 0) {
        return Swal.fire({
          icon: "error",
          title: "소유한 포켓몬이 없습니다.",
          text: "포켓몬 포획을 먼저 하세요!",
        });
      }
      {
        Swal.fire({
          title: "포켓몬을 보냈습니다!",
          text: " 포켓몬이 야생으로 돌아갔습니다...",
          icon: "success",
          confirmButtonText: "확인",
        });
        state.splice(0, 6);
      }
    },
  },
});

export const { addPokemon, removePokemon, initPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
