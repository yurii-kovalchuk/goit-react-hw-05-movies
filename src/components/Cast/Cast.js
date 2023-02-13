import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArtistCard } from 'components/ArtistCard/ArtistCard';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f9d814745439162b2afd5ff7833832ed`
        );
        setCast(response.data.cast);
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
          cast.map(artist => (
            <li key={artist.credit_id}>
              <ArtistCard
                name={artist.name}
                character={artist.character}
                profile_path={artist.profile_path}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
