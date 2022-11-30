import React from 'react';

//import Movie from './Movie';
const Movie = ({ movie }) => {
  return (
    <div>
      <p>Título: {movie.Title}</p>
      <img src={movie.Poster} alt="" />
    </div>
  );
};

export default Movie;
