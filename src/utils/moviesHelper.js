import { addMovie, updateMovie, deleteMovie } from "../store/moviesSlice";
import toast from "react-hot-toast";

export const addMovieHelper = (dispatch, movie) => {
  dispatch(addMovie(movie));
  toast.success("Movie has been Added!");
};

export const updateMovieHelper = (dispatch, movie) => {
  dispatch(updateMovie(movie));
  toast.success("Movie has been Updated!");
};

export const deleteMovieHelper = (dispatch, movie) => {
  if (confirm("Are you sure to delete this movie?")) {
    dispatch(deleteMovie(movie.title));
    toast.success("Movie has been Deleted!");
  }
};
