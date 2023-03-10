import PropTypes from 'prop-types';
import { WrapArtistCard } from './ArtistCard.styled';

export const ArtistCard = ({ name, character, profile_path }) => {
  return (
    <WrapArtistCard>
      <img src={`https://image.tmdb.org/t/p/w92${profile_path}`} alt={name} />
      <h4>{name}</h4>
      <p>Character: {character}</p>
    </WrapArtistCard>
  );
};

ArtistCard.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
