import { configureStore } from "@reduxjs/toolkit";
import { favReducer } from "./Reducers";

const store = configureStore({
  reducer: {
    fav: favReducer,
  },
});

export default store;
