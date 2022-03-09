//https://redux-toolkit.js.org/tutorials/quick-start
//https://redux-toolkit.js.org/api/createAsyncThunk

import { createSlice } from "@reduxjs/toolkit";
import { API_key } from "../API/handleAPI";

// export const getMovies = createAsyncThunk("movies/getMovies", async () => {
//   const movies = "Batman";
//   const response = await fetch(
//     `https://www.omdbapi.com?apikey=${API_key}&s=${movies}&type=movie`
//   );
//   const data = response.json();
//   console.log("movies: ", data.Search.Title, data.Search.Year);
//   // return response.Search;
// });

// export const getShows = createAsyncThunk("shows/getShows", async () => {
//   const shows = "Seinfeld";
//   const response = await fetch(
//     `https://www.omdbapi.com?apikey=${API_key}&s=${shows}&type=series`
//   );
//   const data = response.json();
//   console.log("shows: ", data.Search.Title, data.Search.Year);
//   // return response.Search;
// });

const initialState = {
  movies: {},
  shows: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movieData: (state, action) => {
      return { ...state, movies: action.payload };
    },
    showData: (state, action) => {
      return { ...state, shows: action.payload };
    },
  },
  // extraReducers: {
  //   [getMovies.pending]: () => {
  //     console.log("Loading Movies...");
  //   },
  //   [getMovies.fulfilled]: (state, action) => {
  //     console.log("Movies Fulfilled!");
  //     state.movies = { ...state, movies: action.payload };
  //   },
  //   [getMovies.rejected]: () => {
  //     console.log("Movies REJECTED");
  //   },
  //   [getShows.pending]: () => {
  //     console.log("Loading Shows...");
  //   },
  //   [getShows.fulfilled]: (state, action) => {
  //     console.log("Shows Fulfilled!");
  //     state.shows = { ...state, shows: action.payload };
  //   },
  //   [getShows.rejected]: () => {
  //     console.log("Shows REJECTED");
  //   },
  // },
});

export const { movieData, showData } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
// export const getAllShows = (state) => state.movies.shows;

export default movieSlice.reducer;

export const fetchData = () => {
  const movieThunk = async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const responseMovies = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=batman&type=series`
    );
    const moviesData = await responseMovies.json();
    dispatch(movieData(moviesData));
    console.log(state, moviesData);
    // const responseShows = await fetch(
    //   `https://www.omdbapi.com?apikey=${API_key}&s=seinfeld&type=series`
    // );
    // const showsData = await responseShows.json();
    // dispatch(showData(showsData));
    // console.log(state, showsData);
  };
  return movieThunk;
};
