//https://redux-toolkit.js.org/tutorials/quick-start
//https://redux-toolkit.js.org/api/createAsyncThunk

import { createSlice } from "@reduxjs/toolkit";
import { API_key } from "../API/handleAPI";

const initialState = {
  popular: {},
  bestSeries: {},
  bestSuperHero: {},
  newUpcoming: {},
  search: {},
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
    searchData: (state, action) => {
      return { ...state, search: action.payload };
    },
  },
});

export const {
  newUpcomingData,
  popularData,
  bestSeriesData,
  bestSuperHeroData,
  searchData,
} = movieSlice.actions;

export default movieSlice.reducer;

export const fetchUpcomingData = () => {
  const upcomingThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=2022&y=2022`
    );
    const data = await response.json();
    dispatch(newUpcomingData(data));
  };
  return upcomingThunk;
};

export const fetchPopularData = () => {
  const popularThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=potter&t=movie`
    );
    const data = await response.json();
    dispatch(popularData(data));
  };
  return popularThunk;
};

export const fetchBestSuperHeroData = () => {
  const bestSuperHeroThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=avengers&t=movie`
    );
    const data = await response.json();
    dispatch(bestSuperHeroData(data));
  };
  return bestSuperHeroThunk;
};

export const fetchBestSeriesData = () => {
  const bestSeriesThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=cats&t=series`
    );
    const data = await response.json();
    dispatch(bestSeriesData(data));
  };
  return bestSeriesThunk;
};

export const fetchSearchData = (search) => {
  const searchThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=${search}&t=movie`
    );
    const data = await response.json();
    dispatch(searchData(data));
  };
  return searchThunk;
};
