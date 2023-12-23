import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);
  console.log(shows);

  return (
    <div className="movielist">
      <h1>Show List</h1>
      <ul>
        {shows.map((show) => (
          <>
            <Link to={`movie/${show?.show?.id}`}>
              <img
                className="image"
                src={show?.show?.image?.medium}
                alt="movieCollection"
              />
              <li className="listitem">{show.show.name}</li>
              {/* <p>{show.show.id}</p> */}
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
