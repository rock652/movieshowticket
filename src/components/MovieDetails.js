import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const match = useLocation();

  const [show, setShow] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  console.log(id);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = (id) => {
    console.log(id);
    const baseRoute = match.pathname;

    navigate(`/booking/${id}`);

    console.log('Booking ticket for:', show.name);
  };

  return (
    <div className="movieDetails">
      {show ? (
        <>
          <h1>{show.name}</h1>
          <img
            className="image"
            src={show?.image?.medium}
            alt="movieCollection"
          />
          <p>{show.summary}</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              className="button"
              onClick={() => handleBookTicket(show?.id)}
            >
              Book Movie Ticket
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
