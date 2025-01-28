import { IoIosArrowDroprightCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SearchItem = ({ title, onClick }) => {
  return (
    <NavLink to={`/movies/${title}`}>
      <div
        onClick={onClick}
        className="w-full bg-blue text-lg flex items-center justify-between px-4 py-2 text-white hover:text-secondary transition-colors duration-200"
      >
        {title}
        <IoIosArrowDroprightCircle className="w-5 h-5" />
      </div>
    </NavLink>
  );
};

export default SearchItem;
