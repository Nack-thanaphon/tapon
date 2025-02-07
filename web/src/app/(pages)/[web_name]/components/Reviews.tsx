import React from 'react';

const Reviews = ({ reviews }: any) => {
    return (
        <div>
            <h2>Reviews</h2>
            {reviews.map((review: any, index: any) => (
                <div key={index}>
                    <p>{review}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;