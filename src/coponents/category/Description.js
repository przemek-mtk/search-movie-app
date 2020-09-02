import React, { useRef } from "react";
import PropTypes from "prop-types";
import Poster from "../Poster";
import StyledDescription from "./styles/StyledDescription";
import { useHideText } from "../../hooks/useHideText";

const Description = ({ overview, ...rest }) => {
  const paragraphRef = useRef(null);
  const [isGreater, show, toggleExpand] = useHideText(paragraphRef);

  return (
    !!overview.length && (
      <StyledDescription isGreater={isGreater}>
        <Poster {...rest} />
        <div className={`movie-desc ${show ? "show" : ""}`}>
          <p ref={paragraphRef}>{overview}</p>
          {isGreater ? (
            <div className="open-box" onClick={toggleExpand}>
              <i className="fa fa-chevron-down"></i>
            </div>
          ) : null}
        </div>
      </StyledDescription>
    )
  );
};

Description.propTypes = {
  posterSize: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Description;
