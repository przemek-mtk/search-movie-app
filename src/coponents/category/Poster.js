import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ConfigContext } from "../../context/ConfigContext";
import StyledPoster from "./styles/StyledPoster"

const Poster = ({ posterSize, posterPatrh }) => {
  const { config } = useContext(ConfigContext);

  return (
    <StyledPoster>
      <img src={config.secure_base_url + posterSize + posterPatrh} alt="Poster" />
    </StyledPoster>
  );
};

Poster.propTypes = {
  posterSize: PropTypes.string.isRequired,
  posterPatrh: PropTypes.string.isRequired,
};

export default Poster;
