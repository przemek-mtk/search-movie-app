import React, { useState } from "react";
import PropTypes from "prop-types";
import Poster from "./Poster";
import StyledDescription from "./styles/StyledDescription";

const Description = ({ overview, ...rest }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    !!overview.length && (
      <StyledDescription>
        <Poster {...rest} />
        <div className={`movie-desc ${showAll ? "show" : ""}`}>
          <p>{overview}</p>
          <div className="open-box" onClick={() => setShowAll((prev) => !prev)}>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
      </StyledDescription>
    )
  );
};

Description.propTypes = {
  posterSize: PropTypes.string.isRequired,
  posterPatrh: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Description;
