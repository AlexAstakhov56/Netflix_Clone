import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouritesSlice";
import movieReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    movies: movieReducer,
  },
});

export default store;
