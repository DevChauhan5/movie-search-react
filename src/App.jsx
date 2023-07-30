import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const api = import.meta.env.VITE_API_KEY;

  const getMovie = (searchTerm) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${searchTerm}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getMovie(searchTerm || "Avengers");
  }, [searchTerm]);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="border-2 border-black p-2 rounded-2xl flex items-center justify-between w-full relative">
        <input
          className="w-full h-full outline-none p-1"
          type="text"
          placeholder="Search Movies..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <HiOutlineSearch className="cursor-pointer font-bold text-2xl"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
