import { NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { findMovieInFav, handleFavClick } from "../utils/favouritesHelper";
import MovieModal from "./MovieModal";
import { useState } from "react";
import { deleteMovieHelper } from "../utils/moviesHelper";

const MovieItem = ({ movie, isAdmin }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="border border-border hover:scale-97 transition-transform duration-200 relative rounded overflow-hidden">
        <NavLink to={`/movies/${movie?.title}`} className="w-full">
          <img
            src={movie?.image}
            alt={movie?.title}
            className="w-full h-64 object-cover"
          />
        </NavLink>
        <div className="absolute flex flex-wrap justify-between items-center gap-2 bottom-0 right-0 left-0 bg-black/60 px-4 py-3 text-white">
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
          {isAdmin && (
            <div className="flex justify-between w-full">
              <button
                onClick={() => setIsModalVisible(true)}
                className="bg-secondary text-white font-lg font-semibold py-2 px-5 cursor-pointer rounded-xl"
              >
                Update
              </button>
              <button
                onClick={() => deleteMovieHelper(dispatch, movie)}
                className="bg-secondary text-white font-lg font-semibold py-2 px-5 cursor-pointer rounded-xl"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <MovieModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        movie={movie}
      />
    </>
  );
};

export default MovieItem;
