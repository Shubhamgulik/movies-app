import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFavs, addToFavourite } from "../reducers/moviesSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favs = useSelector(selectFavs);
  console.log("Favs finally : ", favs);
  function handleClick() {
    console.log("Clicked : ", movie.Title);
    console.log("In card: ", movie.imdbID);

    dispatch(addToFavourite(movie.imdbID));
  }
  return (
    <div className="movie-card">
      <div className="left">
        <img src={movie.Poster} alt="movie-poster" />
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          <button onClick={handleClick} className="favourite-btn">
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
}
