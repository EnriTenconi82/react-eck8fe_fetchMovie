import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

const MoviesFinderContainer = () => {
  const [movieName, setMovieName] = useState('');

  const [movies, setMovies] = useState([]);

  //al cambiar input seteo movieName
  const onChangeHandler = (ev) => {
    setMovieName(ev.target.value);
    console.log(ev.target.value);
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=7da6b168&s=${movieName}`)
      .then((res) => res.json())
      .then((obj) => {
        if (typeof obj.Search !== 'undefined') {
          setMovies(obj.Search);
        }
      });
  }, [movieName]);

  return (
    <div>
      <p>MOVIE FINDER</p>
      <hr />
      <label htmlFor="peli">Nombre peli </label>
      <input id="peli" value={movieName} onChange={onChangeHandler} />
      <div>
        <p>LISTADO DE PELIS:</p>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MoviesFinderContainer;
