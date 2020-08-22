import React from "react";
import StyledReviews from "./styles/StyledReviews";
import ReviewPost from "./ReviewPost";
import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <StyledReviews>
      <h2>Reviews</h2>

      {reviews.map((review) => (
        <ReviewPost key={review.id} review={review} />
      ))}
    </StyledReviews>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
