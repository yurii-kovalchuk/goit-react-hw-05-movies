import { ListItem, LinkItem } from './MoviesList.styled';

export const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </LinkItem>
        </ListItem>
      ))}
    </ul>
  );
};
