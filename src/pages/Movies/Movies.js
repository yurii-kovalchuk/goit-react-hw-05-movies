import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieSection } from './Movies.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const getQuery = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value.trim();
    if (value === '') {
      toast('please fill in field');
      return;
    }
    setSearchParams({ query: value });
    e.currentTarget.reset();
  };

  useEffect(() => {
    const fetchQueryMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=f9d814745439162b2afd5ff7833832ed&query=${getQuery}`
        );
        setQueryMovies(response.data.results);
      } catch (err) {
        toast(err.message);
      }
    };

    fetchQueryMovies();
  }, [getQuery]);

  return (
    <MovieSection>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {queryMovies && <MoviesList movies={queryMovies} />}
    </MovieSection>
  );
};

export default Movies;
