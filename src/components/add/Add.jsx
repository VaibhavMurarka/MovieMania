import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import LoadingBar from 'react-top-loading-bar';
import "./add.css";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [progress, setProgress] = useState(0);

  const onchange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      // "https://api.themoviedb.org/3/search/multi?api_key=12737eb0218b6cca5b2303c9865cbcdb&include_adult=false&query=boys")
      `https://api.themoviedb.org/3/search/multi?api_key=2cef7bbd99c765eb44d8bff4d473bba2&include_adult=false&query=${e.target.value}`    )
      // `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&include_adult=false&query=${e.target.value}`    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMovies(data.results);
          console.log(movies);
        } else {
          setMovies([]);
        } 
      });
  };

  return (
    <div className="add-page">
      <LoadingBar progress={100} onLoaderFinished={() => setProgress(0)}/>
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search For a Movie..."
              onChange={onchange}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.filter((movie) => movie.media_type !== "person").map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  );
};

export default Add;
