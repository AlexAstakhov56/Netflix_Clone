import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouritesSlice";

const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
  },
});

export default store;
