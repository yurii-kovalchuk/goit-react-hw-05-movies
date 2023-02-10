import { NavLink, Outlet } from 'react-router-dom';
import {
  WrapMainText,
  WrapMainInfo,
  WrapAdditionInfo,
  WrapMovieCard,
} from './MovieCard.styled';

export const MovieCard = ({
  genres,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
}) => {
  const date = release_date.slice(0, 4);
  const genresNames = genres.map(genre => genre.name).join(', ');
  const userScore = vote_average * 10;

  return (
    <WrapMovieCard>
      <WrapMainInfo>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <WrapMainText>
          <h3>
            {title} ({date})
          </h3>
          <p>User score: {userScore}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresNames}</p>
        </WrapMainText>
      </WrapMainInfo>
      <WrapAdditionInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </WrapAdditionInfo>
      <Outlet />
    </WrapMovieCard>
  );
};
