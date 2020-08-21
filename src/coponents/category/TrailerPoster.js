import React, { useContext } from "react";
import StyledTrailerPoster from "./styles/StyledTrailerPoster";
import { ConfigContext } from "../../context/ConfigContext";
import PropTypes from "prop-types"

const TrailerPoster = ({ posterSize, filePath }) => {
  const { config } = useContext(ConfigContext);

  return (
    <StyledTrailerPoster>
      <img src={config.base_url + posterSize + filePath} alt="Trailer poster" />
      <div className="play">
        <i className="fa fa-play play-icon"></i>
      </div>
    </StyledTrailerPoster>
  );
};

TrailerPoster.propTypes = {
  posterSize: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired
}

export default TrailerPoster;
