import React, { useState, useEffect } from 'react';
import './style.css';
import MoviesFinderContainer from './components/MoviesFinderContainer';
export default function App() {
  //variable que contendra lo de la api
  const [api, setApi] = useState([]);

  //renderizo de nuevo una vez que obtengo los datos
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => setApi(res));
  }, []);

  //map para recorrer mi (api) y renderizar todos los elementos
  return (
    <div>
      <MoviesFinderContainer />
      {api.map(({ id, name, company }) => (
        <div key={id}>
          <div>{company.name}</div>
          <div>{name}</div>
          <div>-----------</div>
        </div>
      ))}
    </div>
  );
}
