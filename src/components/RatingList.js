// RatingsList.js
import React from 'react';
import Rating from './Rating';
import AverageRating from './AverageRating';

const RatingsList = ({ ratings }) => {
  return (
    <div>
      <h2>All Ratings:</h2>
      {ratings.map((rating, index) => (
        <Rating
          key={index}
          name={rating.name}
          rate={rating.rate}
          content={rating.content}
        />
      ))}
      <AverageRating ratings={ratings} />
    </div>
  );
};

export default RatingsList;
