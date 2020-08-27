import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ConfigContext } from "../context/ConfigContext";
import StyledPoster from "./styles/StyledPoster";

const Poster = ({ posterSize, posterPath }) => {
  const { config } = useContext(ConfigContext);
  const imgSrc = posterPath
    ? config.secure_base_url + posterSize + posterPath
    : "https://via.placeholder.com/92x138";

  return (
    <StyledPoster>
      <img src={imgSrc} alt="Poster" />
    </StyledPoster>
  );
};

Poster.propTypes = {
  posterSize: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
};

export default Poster;
