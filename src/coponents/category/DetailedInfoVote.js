import React from "react";
import StyledDetailedInfoVote from "./styles/StyledDetailedInfoVote";
import PropTypes from "prop-types";

const DetailedInfoVote = ({ average, count }) => {
  return (
    <StyledDetailedInfoVote>
      <i className="fa fa-star vote__icon"></i>
      <div className="vote__count">
        <span>
          <strong>{average}</strong>/10
        </span>
        <span>{count}</span>
      </div>
    </StyledDetailedInfoVote>
  );
};

DetailedInfoVote.propTypes = {
  average: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default DetailedInfoVote;
