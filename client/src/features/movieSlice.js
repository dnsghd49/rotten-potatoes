//https://redux-toolkit.js.org/tutorials/quick-start

import { createSlice } from "@reduxjs/toolkit";
import { API_key } from "../API/handleAPI";

const initialState = {
  popular: {},
  bestSeries: {},
  bestSuperHero: {},
  newUpcoming: {},
  searchMovie: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    popularData: (state, action) => {
      return { ...state, popular: action.payload };
    },
    bestSeriesData: (state, action) => {
      return { ...state, bestSeries: action.payload };
    },
    bestSuperHeroData: (state, action) => {
      return { ...state, bestSuperHero: action.payload };
    },
    newUpcomingData: (state, action) => {
      return { ...state, newUpcoming: action.payload };
    },
    searchMovieData: (state, action) => {
      return { ...state, searchMovie: action.payload };
    },
  },
});

export const {
  newUpcomingData,
  popularData,
  bestSeriesData,
  bestSuperHeroData,
  searchMovieData,
} = movieSlice.actions;

export default movieSlice.reducer;

export const fetchUpcomingData = () => {
  const upcomingThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&type=movie&s=x-men`
    );
    const data = await response.json();
    dispatch(newUpcomingData(data));
  };
  return upcomingThunk;
};

export const fetchPopularData = () => {
  const popularThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&type=movie&s=star wars`
    );
    const data = await response.json();
    dispatch(popularData(data));
  };
  return popularThunk;
};

export const fetchBestSuperHeroData = () => {
  const bestSuperHeroThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=avengers&type=movie`
    );
    const data = await response.json();
    dispatch(bestSuperHeroData(data));
  };
  return bestSuperHeroThunk;
};

export const fetchBestSeriesData = () => {
  const bestSeriesThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=star trek&type=series`
    );
    const data = await response.json();
    dispatch(bestSeriesData(data));
  };
  return bestSeriesThunk;
};

export const fetchSearchMovieData = (search) => {
  const searchThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=${search}&type=movie`
    );
    const data = await response.json();
    dispatch(searchMovieData(data));
  };
  return searchThunk;
};
