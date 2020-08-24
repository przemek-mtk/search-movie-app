import React from "react";
import PropTypes from "prop-types";
import TrailerPoster from "./TrailerPoster";
import StyledVideos from "./styles/StyledVideos";

const Videos = ({ videos, images, posterSize }) => {
  return (
    !!videos.length && (
      <StyledVideos>
        <h2>Videos</h2>

        <div className="video-list">
          {videos.map((item, index) => {
            return (
              <TrailerPoster
                key={item.id}
                posterSize={posterSize}
                filePath={images[index].file_path}
                isVideo={true}
                thumbnails
              />
            );
          })}
        </div>
      </StyledVideos>
    )
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
  images: PropTypes.array,
};

export default Videos;
