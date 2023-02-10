import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Section, Headline, ListItem, LinkItem } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

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
            <LinkItem to={`/movies/${movie.id}`}>{movie.title}</LinkItem>
          </ListItem>
        ))}
      </ul>
    </Section>
  );
};
