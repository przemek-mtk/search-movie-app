import React from "react";
import StyledInfoVote from "./styles/StyledInfoVote";
import PropTypes from "prop-types";

const InfoVote = ({ average, count, ...rest }) => {
  return (
    <StyledInfoVote {...rest}>
      <i className="fa fa-star vote__icon"></i>
      <div className="vote__count">
        <span>
          <strong>{average}</strong>/10
        </span>
        <span>{count}</span>
      </div>
    </StyledInfoVote>
  );
};

InfoVote.propTypes = {
  average: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default InfoVote;
