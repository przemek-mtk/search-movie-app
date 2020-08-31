import React, {useState} from "react";
import PropTypes from "prop-types";
import TrailerPoster from "./TrailerPoster";
import StyledVideos from "./styles/StyledVideos";
import Portal from "../Portal"
import VideoPlaylist from "./VideoPlaylist"

const Videos = ({ videos, images, posterSize }) => {
  const [playVideo, setPlayVideo] = useState(false);
  
  return (
    !!videos.length && (
      <StyledVideos>
        <h2>Videos</h2>

        <div className="video-list">
          {videos.map((item, index) => {
            return (
              <TrailerPoster
                onClick={() => setPlayVideo(prev => !prev)}
                key={item.id}
                posterSize={posterSize}
                filePath={
                  images.length
                    ? images[index].file_path
                    : "https://via.placeholder.com/210x120"
                }
                isVideo={true}
                thumbnails
              />
            );
          })}

        </div>

          {playVideo && 
            <Portal>
              <VideoPlaylist />
            </Portal>
          }

      </StyledVideos>
    )
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
  images: PropTypes.array,
  posterSize: PropTypes.string
};

export default Videos;
