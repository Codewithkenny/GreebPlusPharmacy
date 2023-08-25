import React, { useState } from 'react';
import './Ratings.css';

const Ratings = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="ratings">
            <h2 className="ratings__title">Product Ratings</h2>
            <div className="ratings__stars">
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        className={`ratings__star ${value <= rating ? 'filled' : ''}`}
                        onClick={() => handleRatingChange(value)}
                    >
                        ★
                    </span>
                ))}
            </div>
            <p className="ratings__selected-rating">
                {rating > 0 ? `You selected a rating of ${rating} stars` : 'Please select a rating'}
            </p>
        </div>
    );
};

export default Ratings;
