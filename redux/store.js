import { configureStore } from "@reduxjs/toolkit";
import marvelSlider from "./marvel/marvelSlice";

export const store = configureStore({
  reducer: {
    marvel: marvelSlider,
  },
});
