import React from 'react';
import ReactPlayer from "react-player"
import StyledVideoPlaylist from "./styles/StyledVideoPlaylist"

const VideoPlaylist = ({}) => {
  return ( 
    <StyledVideoPlaylist>

      <div className="player-box">

        <ReactPlayer
          width = "100%"
          height = "100%"
          // playing={autoplay}
          controls={true}
          // url={active.video}
          />

      </div>


    </StyledVideoPlaylist>
   );
}
 
export default VideoPlaylist;