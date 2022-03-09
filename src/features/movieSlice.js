//https://redux-toolkit.js.org/tutorials/quick-start
//https://redux-toolkit.js.org/api/createAsyncThunk
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { API_key } from "../API/handleAPI";

//left the asyncThunk in case we run into problems later and may need to switch over
// export const getMovies = createAsyncThunk(
//   "movies/getMovies",
//   async (movies) => {
//     const response = await fetch(
//       `https://www.omdbapi.com?apikey=${API_key}&s=${movies}&type=movie`
//     );
//     const data = response.json();
//     return data;
//   }
// );

// export const getShows = createAsyncThunk("shows/getShows", async (shows) => {
//   const response = await fetch(
//     `https://www.omdbapi.com?apikey=${API_key}&s=${shows}&type=series`
//   );
//   const data = response.json();
//   return data;
// });

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

export const {
  newUpcomingData,
  popularData,
  bestSeriesData,
  bestSuperHeroData,
  searchData,
} = movieSlice.actions;
// export const getAllMovies = (state) => state.movie.movies;
// export const getAllShows = (state) => state.movie.shows;

export default movieSlice.reducer;

//left the state variable in case we want to use it later, just need to pass in getState as a parameter
export const fetchUpcomingData = () => {
  const upcomingThunk = async (dispatch) => {
    // const state = getState();
    // console.log(state);
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=2022&y=2022`
    );
    const data = await response.json();
    dispatch(newUpcomingData(data));
    // console.log("ShowData: ", data.Search[5].Poster);
  };
  return upcomingThunk;
};

export const fetchPopularData = () => {
  const popularThunk = async (dispatch) => {
    // const state = getState();
    // console.log(state);
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=potter&t=movie`
    );
    const data = await response.json();
    dispatch(popularData(data));
    // console.log("ShowData: ", data.Search[0].Title);
  };
  return popularThunk;
};

export const fetchBestSuperHeroData = () => {
  const bestSuperHeroThunk = async (dispatch) => {
    // const state = getState();
    // console.log(state);
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=avengers&t=movie`
    );
    const data = await response.json();
    dispatch(bestSuperHeroData(data));
    // console.log("ShowData: ", data.Search[0].Title);
  };
  return bestSuperHeroThunk;
};

export const fetchBestSeriesData = () => {
  const bestSeriesThunk = async (dispatch) => {
    // const state = getState();
    // console.log(state);
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=cats&t=series`
    );
    const data = await response.json();
    dispatch(bestSeriesData(data));
    // console.log("ShowData: ", data.Search[0].Title);
  };
  return bestSeriesThunk;
};

export const fetchSearchData = (search) => {
  const searchThunk = async (dispatch) => {
    // const state = getState();
    // console.log(state);
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_key}&s=${search}&t=movie`
    );
    const data = await response.json();
    dispatch(searchData(data));
    // console.log("ShowData: ", data.Search[0].Title);
  };
  return searchThunk;
};
