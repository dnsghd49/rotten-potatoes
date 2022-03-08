import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  apiData: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, apidData: action.payload };
    },
    searchMovie: (state) => {
      return { ...state, search: state.search };
    },
  },
});

export const { setData, searchMovie } = movieSlice.actions;

export default movieSlice.reducer;

export const fetchMovie = () => {
  const movieThunk = async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const response = await fetch(
      `https://imdb-api.com/en/API/SearchAll/k_zeuppxb1/${state.movie.searchMovie}`
    );
    const resData = await response.json();
    dispatch(setData(resData));
  };
  return movieThunk;
};
