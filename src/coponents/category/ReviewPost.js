import React, { useState } from "react";
import StyledReviewPost from "./styles/StyledReviewPost";
import PropTypes from "prop-types";

const ReviewPost = ({ review }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <StyledReviewPost>
      <h3 className="review-post__author">{review.author}</h3>
      <p className={`review-post__content ${showAll ? "show" : ""}`}>
        {review.content}
      </p>

      <div className="review-post__btn-box">
        <button
          className="show-more"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Read less" : "Read more"}
        </button>
      </div>
    </StyledReviewPost>
  );
};

ReviewPost.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewPost;
