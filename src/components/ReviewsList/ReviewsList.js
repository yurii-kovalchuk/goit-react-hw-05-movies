import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  const markup = (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return reviews.length > 0
    ? markup
    : `We don't have any reviews for this movie.`;
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
