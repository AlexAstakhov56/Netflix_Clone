import { useSelector } from "react-redux";
import Title from "../components/Title";
import { FaHeart } from "react-icons/fa";
import MovieItem from "../components/MovieItem";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <div className="container min-h-screen py-12">
      <Title title="Your Favourite Movies" Icon={FaHeart} />
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {favourites.map((fav) => (
          <MovieItem key={fav.title} movie={fav} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
