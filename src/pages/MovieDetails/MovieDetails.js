import axios from 'axios';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDeteils] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=f9d814745439162b2afd5ff7833832ed`
        );
        setMovieDeteils(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <MovieCard
          genres={movieDetails.genres}
          overview={movieDetails.overview}
          poster_path={movieDetails.poster_path}
          release_date={movieDetails.release_date}
          title={movieDetails.title}
          vote_average={movieDetails.vote_average}
        />
      )}
    </div>
  );
};
