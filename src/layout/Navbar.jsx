import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Movies } from "../../Data/MovieData";
import SearchItem from "../components/SearchItem";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let searchedMovies = Movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearch = () => {
    setSearchQuery("");
  };

  const linkStyles = ({ isActive }) =>
    isActive
      ? "text-secondary text-lg"
      : "text-gray text-lg hover:text-secondary transition-colors duration-200";

  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <div className="bg-primary sticky shadow-md top-0 z-20">
      <div className="container mx-auto py-6  lg:grid gap-10 grid-cols-7 justify-between items-center">
        <div className="col-span-1 lg:block hidden">
          <NavLink to="/">
            <img src="/logo.png" className="w-full h-12 object-contain" />
          </NavLink>
        </div>

        <div className="col-span-3 relative">
          <form className="w-full text-sm bg-gray rounded flex justify-between items-center gap-4">
            <button
              type="submit"
              className="w-12 flex flex-col justify-center cursor-pointer items-center bg-secondary h-12 rounded text-white"
            >
              <IoSearch />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for movie"
              className="font-medium placeholder:text-border text-primary text-lg px-1 w-11/12 h-12"
            />
          </form>
          {searchQuery.length > 0 && (
            <div className="w-full rounded absolute top-12 z-20">
              {searchedMovies.map((movie) => (
                <SearchItem title={movie.title} onClick={handleSearch} />
              ))}
            </div>
          )}
        </div>

        <div className="col-span-3 font-medium hidden text-sm xl:gap-15 justify-between items-center lg:flex xl:justify-end">
          <NavLink to="/" className={linkStyles}>
            Home
          </NavLink>
          <NavLink to="/movies" className={linkStyles}>
            Movies
          </NavLink>
          <NavLink to="/about" className={linkStyles}>
            About
          </NavLink>
          <NavLink to="/contacts" className={linkStyles}>
            Contacts
          </NavLink>
          <NavLink to="/favourites" className={`${linkStyles} relative`}>
            <FaHeart className="h-7 w-7" />
            <div className="w-5 h-5 absolute text-sm flex flex-col justify-center items-center bg-secondary text-white -top-3 -right-2 rounded-full">
              {favourites.length}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
