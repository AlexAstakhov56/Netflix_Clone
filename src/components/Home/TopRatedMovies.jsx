import { useState } from "react";
import Title from "../Title";
import { FcRating } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Movies } from "../../../Data/MovieData";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findMovieInFav, handleFavClick } from "../../utils/favouritesHelper";

const TopRatedMovies = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <div className="my-16">
      <Title title="Top Rated Movies" Icon={FcRating} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },

            865: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
        >
          {Movies.filter((movie) => movie.rate >= 8.0).map((movie) => (
            <SwiperSlide key={movie.title}>
              <div className="h-[400px] my-hovered border border-border bg-blue overflow-hidden rounded-lg">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 my-hover flex flex-col justify-center items-center gap-4 text-center absolute bg-black/60 top-0 left-0 right-0 bottom-0">
                  <button
                    onClick={() => handleFavClick(dispatch, favourites, movie)}
                    className="w-13 h-13 text-lg flex flex-col justify-center items-center cursor-pointer border-secondary rounded-full bg-secondary text-white"
                  >
                    {findMovieInFav(favourites, movie.title) ? (
                      <FaHeart className="w-5 h-5" />
                    ) : (
                      <FaRegHeart className="w-5 h-5" />
                    )}
                  </button>
                  <NavLink
                    to={`/movies/${movie.title}`}
                    className="font-semibold text-3xl tracking-wider"
                  >
                    {movie.title}
                  </NavLink>
                  <div className="flex flex-col justify-center items-center text-xl text-gray">
                    Category: {movie.category}
                  </div>
                  <div className="flex justify-center items-center text-xl text-gray">
                    IMDB Rate:{" "}
                    <span className="text-star ml-2">{movie.rate}</span>{" "}
                    <FaStar className="text-star ml-1" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex flex-row justify-center items-center gap-6 pt-12">
          <button
            className="w-13 h-13 rounded cursor-pointer bg-secondary hover:bg-secondary/70 flex flex-col justify-center items-center text-white"
            ref={(node) => setPrevEl(node)}
          >
            <IoCaretBackCircle className="w-6 h-6" />
          </button>
          <button
            className="w-13 h-13 rounded cursor-pointer bg-secondary hover:bg-secondary/70 flex flex-col justify-center items-center text-white"
            ref={(node) => setNextEl(node)}
          >
            <IoCaretForwardCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
