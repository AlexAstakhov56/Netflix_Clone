import { createSlice } from "@reduxjs/toolkit";
import { Movies } from "../../Data/MovieData";

const getInitState = () => {
  const state = localStorage.getItem("movies");
  return state ? JSON.parse(state) : Movies;
};

const initialState = {
  movies: getInitState(),
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
    updateMovie(state, action) {
      const updatedMovies = state.movies.map((movie) => {
        if (movie.title === action.payload.title) {
          return {
            ...movie,
            desc: action.payload.desc,
            category: action.payload.category,
            year: action.payload.year,
            time: action.payload.time,
            rate: action.payload.rate,
          };
        }
        return movie;
      });
      state.movies = updatedMovies;
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
    deleteMovie(state, action) {
      state.movies = state.movies.filter((m) => m.title !== action.payload);
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
  },
});

export const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
