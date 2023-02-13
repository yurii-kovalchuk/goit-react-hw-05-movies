import axios from 'axios';
import { toast } from 'react-toastify';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BackBtn, WrapMovieDetail } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDeteils] = useState(null);
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=f9d814745439162b2afd5ff7833832ed`
        );
        setMovieDeteils(response.data);
      } catch (err) {
        toast(err.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <WrapMovieDetail>
      <Link to={backHref.current}>
        <BackBtn type="button">
          <TiArrowBackOutline />
          <span> Go back</span>
        </BackBtn>
      </Link>
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
    </WrapMovieDetail>
  );
};
