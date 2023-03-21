import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFavs, addToFavourite } from "../reducers/moviesSlice";
import { store } from "../store";
export default function MovieCard({ movie, isMovieFavourite }) {
  const dispatch = useDispatch();
  const favs = useSelector(selectFavs);

  store.subscribe(() => {
    console.log("Added");
  });

  function handleClick() {
    // console.log("Clicked : ", movie.Title);
    // console.log("In card: ", movie.imdbID);
    dispatch(addToFavourite(movie));
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
          {isMovieFavourite ? (
            <button className="favourite-btn">Remove</button>
          ) : (
            <button onClick={handleClick} className="favourite-btn">
              Add to Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
