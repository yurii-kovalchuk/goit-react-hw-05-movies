import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from '../ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f9d814745439162b2afd5ff7833832ed`
        );
        setReviews(response.data.results);
      } catch (err) {
        toast(err.message);
      }
    };

    fetchMovieReviews();
  }, [movieId]);
  return <div>{reviews && <ReviewsList reviews={reviews} />}</div>;
};

export default Reviews;
