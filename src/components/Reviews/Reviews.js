import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul className="Reviews">
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews provided.</p>
      )}
    </>
  );
};

export default Reviews;
