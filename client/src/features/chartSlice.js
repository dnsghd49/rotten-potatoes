import { createSlice } from "@reduxjs/toolkit";
import { API_key } from "../API/handleAPI";

const initialState = {
  mostStreaming: {},
  mostPopular: {},
  newTV: {},
  searchShow: {},
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    mostStreamingData: (state, action) => {
      return { ...state, mostStreaming: action.payload };
    },
    mostPopularData: (state, action) => {
      return { ...state, mostPopular: action.payload };
    },
    newTVData: (state, action) => {
      return { ...state, newTV: action.payload };
    },
    searchShowData: (state, action) => {
      return { ...state, searchShow: action.payload };
    },
  },
});

export const { mostStreamingData, mostPopularData, newTVData, searchShowData } =
  chartSlice.actions;

export default chartSlice.reducer;

export const fetchMostStreamingData = () => {
  const mostStreamingThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=chainsaw&type=movie`
    );
    const data = await response.json();
    dispatch(mostStreamingData(data));
  };
  return mostStreamingThunk;
};

export const fetchMostPopularData = () => {
  const mostPopularThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=batman&type=movie`
    );
    const data = await response.json();
    dispatch(mostPopularData(data));
  };
  return mostPopularThunk;
};

export const fetchnewTVData = () => {
  const newTVThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=family&type=series`
    );
    const data = await response.json();
    dispatch(newTVData(data));
  };
  return newTVThunk;
};

export const fetchSearchShowData = (search) => {
  const searchShowThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=${search}&type=series`
    );
    const data = await response.json();
    dispatch(searchShowData(data));
  };
  return searchShowThunk;
};
