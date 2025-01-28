import { useState } from "react";
import { Movies } from "../../Data/MovieData";
import MovieItem from "../components/MovieItem";
import FilterItem from "../components/FilterItem";
import PageButton from "../components/pageButton";

const filters = [
  "All",
  "Action",
  "Fantastic",
  "Detective",
  "Horror",
  "Comedy",
  "Romantic",
];

const MoviesPage = () => {
  const [page, setPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState("All");

  const filteredMovies =
    currentFilter === "All"
      ? Movies
      : Movies.filter((movie) => movie.category === currentFilter);

  const moviesPerPage = 8;
  const lastMovieIndex = page * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  const pagedMovies =
    filteredMovies.length >= moviesPerPage
      ? Movies.slice(firstMovieIndex, lastMovieIndex)
      : filteredMovies;

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };

  const handlePagination = (page) => {
    setPage(page);
  };

  return (
    <div className="min-h-screen container px-2 py-6">
      <p className="text-xl my-6 font-medium">
        Total movies:{" "}
        <span className="text-secondary">{filteredMovies.length}</span>
      </p>

      <div className="flex items-center gap-3">
        {filters.map((filter) => (
          <FilterItem
            key={filter}
            filter={filter}
            isActive={filter === currentFilter}
            onClick={handleFilter}
          />
        ))}
      </div>

      <div className="grid mt-10 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {pagedMovies.map((movie) => (
          <MovieItem key={movie.title} movie={movie} />
        ))}
      </div>

      {filteredMovies.length > 16 && (
        <div className="flex items-center justify-center gap-4 my-5">
          <PageButton value={1} currentPage={page} onClick={handlePagination} />
          <PageButton value={2} currentPage={page} onClick={handlePagination} />
          <PageButton value={3} currentPage={page} onClick={handlePagination} />
        </div>
      )}
      {filteredMovies.length >= 8 && filteredMovies.length < 17 && (
        <div className="flex items-center justify-center gap-4 my-5">
          <PageButton value={1} currentPage={page} onClick={handlePagination} />
          <PageButton value={2} currentPage={page} onClick={handlePagination} />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
