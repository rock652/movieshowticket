import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="booking/:id" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
