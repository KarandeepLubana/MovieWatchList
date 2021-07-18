import { useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import GlobalContext from "./globalContext";
import {
  ADD_MOVIE_TO_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHLIST,
  ADD_MOVIE_TO_WATCHED,
  MOVE_TO_WATCHLIST,
  REMOVE_FROM_WATCHED,
} from "./AppActions";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: ADD_MOVIE_TO_WATCHLIST, payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: REMOVE_MOVIE_FROM_WATCHLIST, payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: ADD_MOVIE_TO_WATCHED, payload: movie });
  };

  const moveToWatchList = (movie) => {
    dispatch({ type: MOVE_TO_WATCHLIST, payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: REMOVE_FROM_WATCHED, payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchList,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
