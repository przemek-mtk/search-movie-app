import React, { useContext } from "react";
import PropTypes from "prop-types";
import { StyledVideoList } from "./styles/StyledVideos";
import TrailerPoster from "./TrailerPoster";
import { CategoryContext } from "../../context/CategoryContext";
import { ConfigContext } from "../../context/ConfigContext";

const VideoList = ({ playTrailer, currentlyPlaying, ...rest }) => {
  const { data } = useContext(CategoryContext);
  const { config } = useContext(ConfigContext);
  const { backdrop_sizes } = config;
  let { videos, images } = data;
  const trailers =
    videos && videos.results.filter((video) => video.type === "Trailer");
  const imagesList = images.backdrops;

  return (
    <StyledVideoList>
      {trailers.map((trailer, index) => {
        return (
          <TrailerPoster
            onClick={() => playTrailer(trailer.key)}
            key={trailer.id}
            active={currentlyPlaying === trailer.key ? true : false}
            posterSize={backdrop_sizes[0]}
            filePath={
              imagesList.length
                ? imagesList[index].file_path
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

VideoList.propTypes = {
  playTrailer: PropTypes.func.isRequired,
  currentlyPlaying: PropTypes.string,
};

export default VideoList;
