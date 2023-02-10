import { WrapAutoCard } from './ActorCard.styled';

export const ActorCard = ({ name, character, profile_path }) => {
  return (
    <WrapAutoCard>
      <img src={`https://image.tmdb.org/t/p/w92${profile_path}`} alt={name} />
      <h4>{name}</h4>
      <p>Character: {character}</p>
    </WrapAutoCard>
  );
};
