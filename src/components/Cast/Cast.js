import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorCard } from 'components/ActorCard/ActorCard';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f9d814745439162b2afd5ff7833832ed`
        );
        setCast(response.data.cast);
        console.dir(response.data.cast);
      } catch (err) {
        toast(err.message);
      }
    };

    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast &&
          cast.map(actor => (
            <li key={actor.credit_id}>
              <ActorCard
                name={actor.name}
                character={actor.character}
                profile_path={actor.profile_path}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
