import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const [show, setShow] = useState(null);

  const [movieName, setmovieName] = useState('');
  const [moviePrice, setmoviePrice] = useState('');
  const [rating, setRating] = useState('');
  console.log(movieName);
  console.log(moviePrice);
  console.log(rating);

  const { id } = useParams();
  console.log(movieName);
  console.log(moviePrice);

  const moviesname = (e) => {
    setmovieName(e.target.value);
  };

  const moviesprice = (e) => {
    setmoviePrice(e.target.value);
  };

  const ratings = (e) => {
    setRating(e.target.value);
  };

  const [userDataSet, setUserDataSet] = useState([]);
  useEffect(() => {
    const storedUserDataSet =
      JSON.parse(localStorage.getItem('userData')) || [];
    if (storedUserDataSet) {
      setUserDataSet(storedUserDataSet);
    }
  }, []);

  console.log('data from local storage', userDataSet);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  useEffect(() => {
    if (show) {
      setmovieName(show?.name);
      setmoviePrice(show?.runtime);
      setRating(show?.rating?.average);
    }
  }, [show]);

  console.log(show);

  const submit = (e) => {
    e.preventDefault();

    const userData = {
      movieName,
      moviePrice,
      rating,
    };

    // const newData = [...userDataSet, userData];
    setUserDataSet((prevUserDataSet) => [...prevUserDataSet, userData]);

    console.log(userData);

    localStorage.setItem(
      'userData',
      JSON.stringify([...userDataSet, userData])
    );
    alert('data successfully submitted into localStorage');
  };

  return (
    <div className="bookingitem">
      <h5>Booking form Ticket</h5>
      <form onSubmit={(e) => submit(e)}>
        <div className="labelcenter">
          <label for="fname">movie name:</label>

          <input
            type="text"
            name="fname"
            value={movieName}
            onChange={(e) => moviesname(e)}
          />

          <br />
          <label for="lname">runtime:</label>
          <input
            type="text"
            name="lname"
            value={moviePrice}
            onChange={(e) => moviesprice(e)}
          />

          <br />
          <label for="rating">Rating: </label>
          <input
            type="text"
            name="lname"
            value={rating}
            onChange={(e) => ratings(e)}
          />
          <br />

          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
