import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addMovies, selectMovies, selectFavs } from "../reducers/moviesSlice";
import { store } from "../store";

function App() {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMovies);

  useEffect(() => {
    store.subscribe(() => {
      console.log("updated");
      // console.log("State after: ", store.getState().movies);
    });
    dispatch(addMovies(data));
  }, []);

  const isMovieFavourite = (movie) => {
    const { favourites } = store.getState().movies;
    console.log("Favs", store.getState());

    const index = favourites.indexOf(movie);
    console.log("Index", index);

    if (index !== -1) return true;
    return false;
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {moviesList.map((movie, index) => {
            // const isFavourite = isMovieFavourite(movie);
            return (
              <MovieCard
                movie={movie}
                isMovieFavourite={isMovieFavourite(movie)}
                key={`movie-${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
