import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addMovies, selectMovies } from "../reducers/moviesSlice";

function App(props) {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMovies);
  console.log("Finally :", moviesList);
  // useEffect(() => {
  //   store.subscribe(() => {
  //     console.log("updated");
  //     console.log("State after: ", store.getState().movies);
  //     movies = store.getState().movies;
  //     console.log("Movies final : ", movies);
  //   });

  dispatch(addMovies(data));

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
            return <MovieCard movie={movie} key={`movie-${index}`} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
