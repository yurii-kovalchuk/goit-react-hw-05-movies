import axios from 'axios';
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
        console.log(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
};
