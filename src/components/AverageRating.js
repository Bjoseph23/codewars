// AverageRating.js
import React from 'react';

const AverageRating = ({ ratings }) => {
  const average = ratings.length > 0 ? 
    ratings.reduce((acc, curr) => acc + curr.rate, 0) / ratings.length : 0;
  const filledStars = '★'.repeat(Math.round(average));
  const emptyStars = '☆'.repeat(5 - Math.round(average));

  return (
    <div>
      <h3>Average Rating:</h3>
      <div>
        <span>{filledStars}</span>
        <span>{emptyStars}</span>
      </div>
    </div>
  );
};

export default AverageRating;
