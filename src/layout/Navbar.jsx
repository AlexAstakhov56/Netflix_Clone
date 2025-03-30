import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Movies } from "../../Data/MovieData";
import SearchItem from "../components/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setIsAdmin } from "../store/authSlice";

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
      ? "text-secondary md:text-lg text-sm"
      : "text-gray md:text-lg text-sm hover:text-secondary transition-colors duration-200";

  const favourites = useSelector((state) => state.favourites.favourites);
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUsername(""));
    dispatch(setIsAdmin(false));
  };

  return (
    <div className="bg-primary sticky shadow-md top-0 z-20">
      <div className="container mx-auto py-6 lg:grid gap-6 md:grid-cols-7 grid-cols-2 md:justify-between justify-center items-center">
        <div className="col-span-1 lg:block">
          <NavLink to="/">
            <img src="/logo.png" className="w-full h-12 object-contain" />
          </NavLink>
        </div>

        <div className="md:col-span-3 col-span-1 relative flex justify-center my-5 md:my-0">
          <form className="md:w-[500px] w-[400px] text-sm bg-gray rounded flex justify-between items-center gap-4">
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
              className="font-medium placeholder:text-border text-primary md:text-lg text-md px-1 w-11/12 h-12"
            />
          </form>
          {searchQuery.length > 0 && (
            <div className="md:w-[500px] w-[400px] rounded absolute top-12 z-20">
              {searchedMovies.map((movie) => (
                <SearchItem title={movie.title} onClick={handleSearch} />
              ))}
            </div>
          )}
        </div>

        <div className="col-span-3 font-medium xl:gap-15 md:justify-between justify-center items-center flex gap-5 xl:justify-end">
          <NavLink to="/" className={linkStyles}>
            Home
          </NavLink>
          <NavLink to="/movies" className={linkStyles}>
            Movies
          </NavLink>
          <NavLink to="/about" className={linkStyles}>
            About
          </NavLink>
          {/* <NavLink to="/contacts" className={linkStyles}>
            Contacts
          </NavLink> */}
          <NavLink to="/favourites" className={`${linkStyles} relative`}>
            <FaHeart className="h-7 w-7" />
            <div className="w-5 h-5 absolute text-sm flex flex-col justify-center items-center bg-secondary text-white -top-3 -right-2 rounded-full">
              {favourites.length}
            </div>
          </NavLink>
          <div className="flex items-center gap-3">
            <FaUserCircle className="h-8 w-8" />
            {auth.username === "" ? (
              <NavLink to="/login" className={linkStyles}>
                Login
              </NavLink>
            ) : (
              <>
                <div>
                  <p className="text-lg font-semibold">{auth.username}</p>
                  {auth.isAdmin && <p className="text-md text-gray">admin</p>}
                  <div
                    className="text-md cursor-pointer text-white hover:text-secondary transition-colors duration-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
