import React from 'react';
import PropTypes from "prop-types"
import StyledVideos from "./styles/StyledVideos"

const Videos = ({videos}) => {
  return ( 
    <StyledVideos>
      <h2>Videos</h2>

      <div className="video-list">

    I will be back!

      </div>


    </StyledVideos>
   );
}
 
Videos.propTypes = {
  videos: PropTypes.array
}

export default Videos;