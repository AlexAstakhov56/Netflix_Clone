import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Movies } from "../../../Data/MovieData";
import MovieData from "../MovieData";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { findMovieInFav, handleFavClick } from "../../utils/favouritesHelper";

const HomeSlider = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        direction="vertical"
        className="w-full xl:h-96 bg-blue lg:h-64 h-48"
      >
        {Movies.slice(0, 6).map((movie) => (
          <SwiperSlide
            key={movie.title}
            className="relative rounded overflow-hidden"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 left-0 right-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl sm:text-2xl text-xl capitalize truncate font-bold">
                {movie.title}
              </h1>
              <div className="flex gap-5 items-center text-gray">
                <MovieData movie={movie} />
              </div>

              <div className="flex gap-5 items-center">
                <NavLink
                  to={`/movies/${movie.title}`}
                  className="bg-secondary text-white hover:text-primary transition-colors duration-200 px-6 py-2 rounded text-lg"
                >
                  Watch
                </NavLink>
                <button
                  onClick={() => handleFavClick(dispatch, favourites, movie)}
                  className="bg-gray-400 cursor-pointer text-white hover:text-secondary transition-colors duration-200 px-4 py-2 rounded text-lg"
                >
                  {findMovieInFav(favourites, movie.title) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
