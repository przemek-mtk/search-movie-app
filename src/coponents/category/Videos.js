import React, { useState, useContext } from "react";
import { StyledVideos } from "./styles/StyledVideos";
import Portal from "../Portal";
import VideoPlaylist from "./VideoPlaylist";
import VideoList from "./VideoList";
import PropTypes from "prop-types";

const Videos = ({
  isTrailer,
  play,
  active,
  playTrailer,
  setActive,
  setPlay,
}) => {
  return (
    !!isTrailer && (
      <StyledVideos>
        <h2>Videos</h2>

        <VideoList playTrailer={playTrailer} />

        {play && (
          <Portal>
            <VideoPlaylist active={active} setPlay={setPlay}>
              {isTrailer > 1 ? (
                <VideoList
                  playTrailer={setActive}
                  currentlyPlaying={active}
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

Videos.propTypes = {
  isTrailer: PropTypes.number.isRequired,
  play: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
  playTrailer: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  setPlay: PropTypes.func.isRequired,
};

export default Videos;
