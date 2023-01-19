import { createReducer } from "@reduxjs/toolkit";
import { weatherDataType } from "./types";

interface favState {
  value: weatherDataType[];
}

const initialState = {
  value: [],
} as favState;

export const favReducer = createReducer(initialState, {
  addToFav: (state, action) => {
    // if already exist then do nothing

    // console.log(action.payload);

    state.value = [action.payload, ...state.value];
  },

  removeFromFav: (state, action) => {
    // payload will be cityId
    state.value = state.value.filter((city) => city.id !== action.payload);
  },

  addMultiple: (state, action) => {
    // payload will be cityId
    state.value = [...action.payload];
  },
});
