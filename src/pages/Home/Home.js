import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { HomeSection, Headline } from './Home.styled';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=f9d814745439162b2afd5ff7833832ed'
        );
        setMovies(response.data.results);
      } catch (err) {
        toast(err.message);
      }
    };

    fetchPopular();
  }, []);

  return (
    <HomeSection>
      <Headline>Popular movies</Headline>
      {movies && <MoviesList movies={movies} />}
    </HomeSection>
  );
};
