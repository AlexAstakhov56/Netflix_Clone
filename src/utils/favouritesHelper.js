import { addMovieToFav, deleteMovieFromFav } from "../store/favouritesSlice";
import toast from "react-hot-toast";

export const findMovieInFav = (favourites, title) => {
  return favourites.find((f) => f.title === title) !== undefined;
};

export const handleFavClick = (dispatch, favourites, movie) => {
  if (!findMovieInFav(favourites, movie.title)) {
    dispatch(addMovieToFav(movie));
    toast.success("Added to your Favourites!");
  } else {
    dispatch(deleteMovieFromFav(movie.title));
    toast.success("Removed from your Favourites!");
  }
};
