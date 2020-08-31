import React from "react";
import ReactPlayer from "react-player";
import StyledVideoPlaylist from "./styles/StyledVideoPlaylist";

const VideoPlaylist = ({ activeVideo, children }) => {
  return (
    <StyledVideoPlaylist>
      <div className="player-box">

      <div className="player-wrapper">
        <ReactPlayer
          style={{ position: "absolute", top: "0" }}
          width="100%"
          height="100%"
          playing={true}
          controls={true}
          url={`https://www.youtube.com/watch?v=${activeVideo}`}
          />
      </div>
      {children}
          </div>
    </StyledVideoPlaylist>
  );
};

export default VideoPlaylist;
