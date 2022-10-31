import React, { useState, useEffect } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { MovieCard } from "./components/MovieCard";

//856c6bd5

const API_URL = "http://www.omdbapi.com?apikey=856c6bd5";

//const movie1 = {
//  Title: "Goodfellas",
//  Type: "movie",
//  Year: "1990",
//  imdbID: "tt0099685",
//};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>MovieApp</h1>

      <div className="search">
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch
          className="search-icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
