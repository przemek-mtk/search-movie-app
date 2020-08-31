import React, { useState } from "react";
import PropTypes from "prop-types";
import TrailerPoster from "./TrailerPoster";
import { StyledVideos, StyledVideoList } from "./styles/StyledVideos";
import Portal from "../Portal";
import VideoPlaylist from "./VideoPlaylist";

const Videos = ({ videos, images, posterSize }) => {
  const [playVideo, setPlayVideo] = useState(false); //??????????????
  const [activeVideo, setActiveVideo] = useState(null);

  const playMovieTrailer = (id) => {
    setPlayVideo((prev) => !prev);
    setActiveVideo(id);
  };

  const changeActiveVideo = (id) => {
    setActiveVideo(id);
  }

  return (
    !!videos.length && (
      <StyledVideos>
        <h2>Videos</h2>

        <VideoList
          videos={videos}
          posterSize={posterSize}
          images={images}
          playMovieTrailer={playMovieTrailer}
        />

        {playVideo && (
          <Portal>
            <VideoPlaylist activeVideo={activeVideo} videos={videos}>
              {videos.length > 1 ? (
                <VideoList
                  videos={videos}
                  posterSize={posterSize}
                  images={images}
                  playMovieTrailer={changeActiveVideo}
                  currentlyPlaying={activeVideo}
                  player
                />
              ) : null}
            </VideoPlaylist>
          </Portal>
        )}
      </StyledVideos>
    )
  );
};

const VideoList = ({ videos, posterSize, images, playMovieTrailer, currentlyPlaying, ...rest }) => {
  return (
    <StyledVideoList>
      {videos.map((item, index) => {
        return (
          <TrailerPoster
            onClick={() => playMovieTrailer(item.key)}
            key={item.id}
            active={currentlyPlaying === item.key ? true : false}
            posterSize={posterSize}
            filePath={
              images.length
                ? images[index].file_path
                : "https://via.placeholder.com/210x120"
            }
            isVideo={true}
            thumbnails
            {...rest} //player for smaller thumbnail in VideoPlaylist
          />
        );
      })}
    </StyledVideoList>
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
  images: PropTypes.array,
  posterSize: PropTypes.string,
};

export default Videos;
