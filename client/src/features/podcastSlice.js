import { createSlice } from "@reduxjs/toolkit";
import { API_key } from "../API/handleAPI";

const initialState = {
  newPodcast: {},
  morePodcast: {},
};

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    podcastData: (state, action) => {
      return { ...state, newPodcast: action.payload };
    },
    morePodcastData: (state, action) => {
      return { ...state, morePodcast: action.payload };
    },
  },
});

export const { podcastData, morePodcastData } = podcastSlice.actions;

export default podcastSlice.reducer;

export const fetchPodcastData = () => {
  const podcastThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=podcast&type=series&page=1`
    );
    const data = await response.json();
    dispatch(podcastData(data));
  };
  return podcastThunk;
};

export const fetchMorePodcastData = () => {
  const morePodcastThunk = async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=podcast&type=series&page=3`
    );
    const data = await response.json();
    dispatch(morePodcastData(data));
  };
  return morePodcastThunk;
};
