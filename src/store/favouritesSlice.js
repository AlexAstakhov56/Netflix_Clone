import { createSlice } from "@reduxjs/toolkit";

const getInitState = () => {
  const state = localStorage.getItem("favourites");
  return state ? JSON.parse(state) : [];
};

const initialState = {
  favourites: getInitState(),
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addMovieToFav(state, action) {
      state.favourites.push(action.payload);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    deleteMovieFromFav(state, action) {
      state.favourites = state.favourites.filter(
        (f) => f.title !== action.payload
      );
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { addMovieToFav, deleteMovieFromFav } = favouritesSlice.actions;

export default favouritesSlice.reducer;
