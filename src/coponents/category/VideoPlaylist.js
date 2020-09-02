import React, { useRef } from "react";
import ReactPlayer from "react-player";
import StyledVideoPlaylist from "./styles/StyledVideoPlaylist";
import PropTypes from "prop-types";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const VideoPlaylist = ({ active, setPlay, children }) => {
  const playerBox = useRef(null);
  useOutsideClick(playerBox, () => setPlay(false));

  return (
    <StyledVideoPlaylist>
      <div className="player-box" ref={playerBox}>
        <div className="player-wrapper">
          <ReactPlayer
            style={{ position: "absolute", top: "0" }}
            width="100%"
            height="100%"
            playing={true}
            controls={true}
            url={`https://www.youtube.com/watch?v=${active}`}
          />
        </div>
        {children}
      </div>
    </StyledVideoPlaylist>
  );
};

VideoPlaylist.propTypes = {
  active: PropTypes.string.isRequired,
  setPlay: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default VideoPlaylist;
