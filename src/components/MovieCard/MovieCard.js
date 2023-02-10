import { WrapInfoBlock, WrapMovieCard } from './MovieCard.styled';

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
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <WrapInfoBlock>
        <h3>
          {title} ({date})
        </h3>
        <p>User score: {userScore}%</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genresNames}</p>
      </WrapInfoBlock>
    </WrapMovieCard>
  );
};
