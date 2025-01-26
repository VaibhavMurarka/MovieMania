import React, { useContext } from "react";
import "./resultcard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let alrWatchlist = watchlist.find((o) => o.id === movie.id);
  let checkWatchlist = alrWatchlist ? true : false;

  let alrWatched = watched.find((o) => o.id === movie.id);
  let checkWatched = alrWatched ? true : false;
  async function addToWatchlist(movie) {
    await addMovieToWatchlist(movie);
    toast("Added to Watchlist!", {
      autoClose: 1000,
      closeOnClick: false,
      pauseOnHover: false,
      theme: "dark",
    });
  }
  async function addToWatched(movie) {
    await addMovieToWatched(movie);
    toast("Added to Watched!", {
      autoClose: 1000,
      closeOnClick: false,
      pauseOnHover: false,
      theme: "dark",
    });
  }
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title?movie.title:movie.name} Poster`}
            width="200"
            height="300"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="No preview available"
            width="200"
            height="300"
          />
        )}
      </div>
      <div className="header1">
        <h2 className="title">{movie.title?movie.title:movie.name}</h2>
        <h4 className="date">{movie.release_date?movie.release_date.slice(0,4):movie.first_air_date?movie.first_air_date.slice(0,4):""}</h4>
        <div className="ctrlbtns">
          <button
            className={checkWatchlist ? "btn off" : "btn add"}
            disabled={checkWatchlist}
            onClick={() => addToWatchlist(movie)}
          >
            {" "}
            Add to Watchlist
          </button>
          <button
            className={checkWatched ? "btn off" : "btn add"}
            disabled={checkWatched}
            onClick={() => addToWatched(movie)}
          >
            {" "}
            Add to Watched
          </button>
        </div>
      </div>
      <ToastContainer closeButton={false} />
    </div>
  );
};

export default ResultCard;
