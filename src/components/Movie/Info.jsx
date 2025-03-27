import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import InfoIcon from "./InfoIcon";
import { useDispatch, useSelector } from "react-redux";
import { findMovieInFav, handleFavClick } from "../../utils/favouritesHelper";

const Info = ({ movie }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src="/background.jpg"
        alt="banner"
        className="w-full h-full hidden xl:inline-block object-cover"
      />
      <div className="bg-primary xl:opacity-90 flex flex-col justify-center items-center xl:absolute top-0 left-0 right-0 bottom-0">
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-20">
          <div className="w-full h-[450px]">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full"
            />
          </div>
          <div className="w-full ">
            <div className="text-5xl font-semibold">{movie.title}</div>
            <div className="text-2xl my-4">Category: {movie.category}</div>
            <p className="text-xl text-gray my-4">{movie.desc}</p>
            <InfoIcon
              info="Year:"
              data={movie.year}
              Icon={IoCalendarNumberSharp}
            />
            <InfoIcon info="Time:" data={movie.time} Icon={FaRegClock} />
            <InfoIcon info="IMDB Rate:" data={movie.rate} Icon={FaStar} />

            <button
              onClick={() => handleFavClick(dispatch, favourites, movie)}
              className="bg-secondary text-xl rounded-lg cursor-pointer px-6 py-2"
            >
              {findMovieInFav(favourites, movie.title)
                ? "Remove To Favourites"
                : "Add From Favourites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
