import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              : "https://placehold.co/600x400/000000/FFFFFF/png"
          }
          alt={movie.title}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h1 className="font-bold text-lg text-black">{movie.title}</h1>
          <p className="text-gray-600 text-sm mt-1">
            Release Date: {movie.release_date}
          </p>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
