import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

const MovieData = ({ movie }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-lg">{movie.category}</span>
      </div>
      <div className="flex items-center gap-1">
        <IoCalendarNumberSharp className="text-secondary" />
        <span className="text-lg">{movie.year}</span>
      </div>
      <div className="flex items-center gap-1">
        <FaRegClock className="text-secondary" />
        <span className="text-lg">{movie.time}</span>
      </div>
    </>
  );
};

export default MovieData;
