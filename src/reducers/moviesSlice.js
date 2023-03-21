import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
  favourites: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      //   console.log("Payload: ", action.payload);
      state.moviesList = action.payload;
    },
    addToFavourite: (state, action) => {
      //   console.log("Payload: ", action.payload.Title);
      state.moviesList.map((movie) => {
        if (movie.imdbID === action.payload.imdbID) {
          console.log("In reducer: ", movie.imdbID);

          state.favourites = [movie, ...state.favourites];
        }
      });
    },
  },
});

export const { addMovies, addToFavourite } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.moviesList;
export const selectFavs = (state) => state.movies.favourites;

export default moviesSlice.reducer;
