import React, { useRef } from "react";
import StyledReviewPost from "./styles/StyledReviewPost";
import PropTypes from "prop-types";
import { useHideText } from "../../hooks/useHideText";

const ReviewPost = ({ review }) => {
  // const [showAll, setShowAll] = useState(false);
  const paragraphRef = useRef(null);
  const [isGreater, show, toggleExpand] = useHideText(paragraphRef);

  return (
    <StyledReviewPost isGreater={isGreater}>
      <h3 className="review-post__author">{review.author}</h3>
      <p
        ref={paragraphRef}
        className={`review-post__content ${show ? "show" : ""}`}
      >
        {review.content}
      </p>
      {isGreater ? (
        <div className="review-post__btn-box">
          <button className="show-more" onClick={toggleExpand}>
            {show ? "Read less" : "Read more"}
          </button>
        </div>
      ) : null}
    </StyledReviewPost>
  );
};

ReviewPost.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewPost;
