import { useParams } from "react-router-dom";
import { Movies } from "../../Data/MovieData";
import Info from "../components/Movie/Info";
import Watch from "../components/Movie/Watch";

const MoviePage = () => {
  const { id } = useParams();
  const currentMovie = Movies.find((movie) => movie.title === id);
  return (
    <div className="bg-primary">
      <Info movie={currentMovie} />
      <Watch url={currentMovie.video} title={currentMovie.title} />
    </div>
  );
};

export default MoviePage;
