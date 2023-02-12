import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Section, Headline, ListItem, LinkItem } from './Home.styled';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
    <Section>
      <Headline>Popular movies</Headline>
      <ul>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </LinkItem>
          </ListItem>
        ))}
      </ul>
    </Section>
  );
};
