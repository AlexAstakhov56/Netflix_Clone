import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouritesSlice";
import movieReducer from "./moviesSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    movies: movieReducer,
    auth: authReducer,
  },
});

export default store;
