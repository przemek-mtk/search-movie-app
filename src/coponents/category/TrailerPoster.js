import React, { useContext } from "react";
import StyledTrailerPoster from "./styles/StyledTrailerPoster";
import { ConfigContext } from "../../context/ConfigContext";
import PropTypes from "prop-types";

const TrailerPoster = ({ posterSize, filePath, isVideo, ...rest }) => {
  const { config } = useContext(ConfigContext);

  return (
    filePath && (
      <StyledTrailerPoster {...rest}>
        <img
          src={config.secure_base_url + posterSize + filePath}
          alt="Trailer poster"
        />
        {isVideo && (
          <div className="play">
            <i className="fa fa-play play-icon"></i>
          </div>
        )}
      </StyledTrailerPoster>
    )
  );
};

TrailerPoster.propTypes = {
  posterSize: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  isVideo: PropTypes.bool.isRequired,
};

export default TrailerPoster;
