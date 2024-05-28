// Rating.js
import React from 'react';

const Rating = ({ name, rate, content }) => {
  const filledStars = '★'.repeat(rate);
  const emptyStars = '☆'.repeat(5 - rate);

  return (
    <div>
      <h3>{name}</h3>
      <p>{content}</p>
      <div> <h3 className="rating">Average Rating: </h3>
        <span>{filledStars}</span>
        <span>{emptyStars}</span>
      </div>
    </div>
  );
};

export default Rating;
