import React, { useContext, useState } from "react";
import "./watchlist.css";
import { MovieCard } from "../moviecard/MovieCard";
import { RiSearchEyeLine } from "react-icons/ri";
import { GlobalContext } from "../../context/GlobalState";
import LoadingBar from 'react-top-loading-bar';

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  const [progress, setProgress] = useState(0);
  return (
    <div className="top-container">
      <LoadingBar progress={100} onLoaderFinished={() => setProgress(0)}/>
      <h1 className="page-head">
        <div className="v-line"></div>My Watchlist
      </h1>
      <div className="card-container">
        {watchlist.length ? (
          <div className="cards">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no">
            Add movies by clicking <RiSearchEyeLine />
          </h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
