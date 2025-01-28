import HomeSlider from "../components/Home/HomeSlider";
import PopularMovies from "../components/Home/PopularMovies";
import TopRatedMovies from "../components/Home/TopRatedMovies";

const Home = () => {
  return (
    <div className="container min-h-screen mb-6">
      <HomeSlider />
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
};

export default Home;
