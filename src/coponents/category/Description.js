import React from "react";
import PropTypes from "prop-types";
import Poster from "./Poster";
import StyledDescription from "./styles/StyledDescription";

const Description = ({ overview, ...rest }) => {
  return (
    <StyledDescription>
      <Poster {...rest} />
      <div className="movie-desc">
        <p>{overview}</p>
      </div>
    </StyledDescription>
  );
};

Description.propTypes = {
  posterSize: PropTypes.string.isRequired,
  posterPatrh: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Description;
