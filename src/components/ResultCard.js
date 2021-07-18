import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <div className="result-overlay">
              <div className="info">

                <div className="controls">
                  <button
                    className="add-btn"
                    onClick={() => addMovieToWatchlist(movie)}
                    disabled={watchlistDisabled}
                  >
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
