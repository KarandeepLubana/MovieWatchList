import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-app">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;