import { NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { findMovieInFav, handleFavClick } from "../utils/favouritesHelper";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <div className="border border-border hover:scale-97 transition-transform duration-200 relative rounded overflow-hidden">
      <NavLink to={`/movies/${movie?.title}`} className="w-full">
        <img
          src={movie?.image}
          alt={movie?.title}
          className="w-full h-64 object-cover"
        />
      </NavLink>
      <div className="absolute flex justify-between items-center gap-2 bottom-0 right-0 left-0 bg-black/60 px-4 py-3 text-white">
        <h3 className="font-semibold text-lg truncate">{movie?.title}</h3>
        <button
          onClick={() => handleFavClick(dispatch, favourites, movie)}
          className="w-9 h-9 text-md flex flex-col justify-center items-center cursor-pointer border-secondary rounded-md bg-secondary text-white"
        >
          {findMovieInFav(favourites, movie.title) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
