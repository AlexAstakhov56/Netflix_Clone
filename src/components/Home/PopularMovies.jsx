import { Movies } from "../../../Data/MovieData";
import MovieItem from "../MovieItem";
import Title from "../Title";
import { BsCollectionPlay } from "react-icons/bs";

const PopularMovies = () => {
  return (
    <div className="my-16">
      <Title title="Popular Movies" Icon={BsCollectionPlay} />
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {Movies.slice(0, 8).map((movie) => (
          <MovieItem key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
