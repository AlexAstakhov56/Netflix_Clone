import { useParams } from "react-router-dom";
import Info from "../components/Movie/Info";
import Watch from "../components/Movie/Watch";
import { useSelector } from "react-redux";

const MoviePage = () => {
  const { id } = useParams();
  const Movies = useSelector((state) => state.movies.movies);
  const currentMovie = Movies.find((movie) => movie.title === id);
  return (
    <div className="bg-primary">
      <Info movie={currentMovie} />
      <Watch url={currentMovie.video} title={currentMovie.title} />
    </div>
  );
};

export default MoviePage;
