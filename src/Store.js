import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import chartReducer from "./features/chartSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    chart: chartReducer,
  },
});
